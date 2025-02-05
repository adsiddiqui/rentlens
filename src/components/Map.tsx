import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents, Circle } from 'react-leaflet';
import { DivIcon, LatLngBounds, Control, DomUtil, DomEvent } from 'leaflet';
import { Apartment, SavedHome, Neighborhood } from '../types';
import { Heart, Map as MapIcon, Layers } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

interface Props {
  apartments: Apartment[];
  selectedApartment: Apartment | null;
  onMarkerClick: (apartment: Apartment) => void;
  savedHomes: SavedHome[];
  onToggleSave: (apartmentId: number) => void;
  onBoundsChange: (bounds: LatLngBounds) => void;
  averagePricePerSqFt: number;
  neighborhoods: Neighborhood[];
}

// Custom control for average price
class AveragePriceControl extends Control {
  private container: HTMLDivElement;
  private price: number;

  constructor(price: number) {
    super({ position: 'topright' });
    this.price = price;
  }

  onAdd(map: L.Map) {
    this.container = DomUtil.create('div', 'leaflet-bar leaflet-control average-price-control');
    this.container.innerHTML = `
      <div class="bg-accent-500/95 backdrop-blur-sm text-white px-4 py-3 rounded-lg shadow-lg border border-accent-400">
        <p class="text-sm font-medium text-white/90">Area Average</p>
        <p class="text-2xl font-bold">$${this.price.toFixed(2)}/ft²</p>
      </div>
    `;
    
    DomEvent.disableClickPropagation(this.container);
    return this.container;
  }

  update(price: number) {
    if (this.container) {
      this.container.innerHTML = `
        <div class="bg-accent-500/95 backdrop-blur-sm text-white px-4 py-3 rounded-lg shadow-lg border border-accent-400">
          <p class="text-sm font-medium text-white/90">Area Average</p>
          <p class="text-2xl font-bold">$${price.toFixed(2)}/ft²</p>
        </div>
      `;
    }
  }
}

// Helper function to get color based on price
const getPriceColor = (price: number, min: number, max: number) => {
  const ratio = (price - min) / (max - min);
  const hue = ((1 - ratio) * 240).toString(10);
  return `hsla(${hue}, 70%, 50%, 0.4)`;
};

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = lat1 * Math.PI/180;
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
};

const groupNearbyListings = (apartments: Apartment[]) => {
  const groups: Array<{
    center: [number, number];
    listings: Apartment[];
    avgPrice: number;
  }> = [];

  const processed = new Set<number>();
  const groupingRadius = 1200; // Increased radius for more aggressive grouping

  apartments.forEach(apt => {
    if (processed.has(apt.id)) return;

    let nearestGroup = null;
    let minDistance = Infinity;

    // Check if this listing should join an existing group
    for (const group of groups) {
      const distance = calculateDistance(
        apt.latitude, apt.longitude,
        group.center[0], group.center[1]
      );

      if (distance <= groupingRadius && distance < minDistance) {
        nearestGroup = group;
        minDistance = distance;
      }
    }

    if (nearestGroup) {
      // Add to existing group
      nearestGroup.listings.push(apt);
      processed.add(apt.id);

      // Recalculate group center and average price
      const totalLat = nearestGroup.listings.reduce((sum, l) => sum + l.latitude, 0);
      const totalLng = nearestGroup.listings.reduce((sum, l) => sum + l.longitude, 0);
      const avgPrices = nearestGroup.listings.map(l => l.rent / l.squareFootage);
      
      nearestGroup.center = [
        totalLat / nearestGroup.listings.length,
        totalLng / nearestGroup.listings.length
      ];
      nearestGroup.avgPrice = avgPrices.reduce((a, b) => a + b) / avgPrices.length;
    } else {
      // Create new group
      const newGroup = {
        center: [apt.latitude, apt.longitude] as [number, number],
        listings: [apt],
        avgPrice: apt.rent / apt.squareFootage
      };
      groups.push(newGroup);
      processed.add(apt.id);
    }
  });

  return groups;
};

const MapControls: React.FC<{
  averagePricePerSqFt: number;
  showHeatmap: boolean;
  onToggleHeatmap: () => void;
  apartments: Apartment[];
}> = ({ averagePricePerSqFt, showHeatmap, onToggleHeatmap, apartments }) => {
  const map = useMap();
  const [showLegend, setShowLegend] = useState(false);
  const [control, setControl] = useState<AveragePriceControl | null>(null);
  
  const prices = apartments.map(apt => apt.rent / apt.squareFootage);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  
  useEffect(() => {
    const newControl = new AveragePriceControl(averagePricePerSqFt);
    newControl.addTo(map);
    setControl(newControl);
    
    return () => {
      if (newControl) {
        newControl.remove();
      }
    };
  }, [map]);

  useEffect(() => {
    if (control) {
      control.update(averagePricePerSqFt);
    }
  }, [averagePricePerSqFt, control]);

  return (
    <div className="leaflet-top leaflet-left mt-2 ml-2 z-[1500]">
      <div className="leaflet-control">
        <button
          className="bg-accent-500/95 backdrop-blur-sm text-white p-3 rounded-lg shadow-lg border border-accent-400 hover:bg-accent-600/95 transition-colors"
          onClick={onToggleHeatmap}
          onMouseEnter={() => setShowLegend(true)}
          onMouseLeave={() => setShowLegend(false)}
        >
          {showHeatmap ? (
            <div className="flex items-center gap-2">
              <MapIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Hide Price Map</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              <span className="text-sm font-medium">Show Price Map</span>
            </div>
          )}
        </button>
        
        {showLegend && showHeatmap && (
          <div className="absolute left-full ml-2 top-0 bg-dark-200/95 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg border border-dark-300 w-56">
            <h4 className="text-sm font-semibold mb-3">Price per sq ft</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">${maxPrice.toFixed(2)}</span>
                <div className="w-8 h-6 rounded" style={{ backgroundColor: getPriceColor(maxPrice, minPrice, maxPrice) }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">${((maxPrice + minPrice) / 2).toFixed(2)}</span>
                <div className="w-8 h-6 rounded" style={{ backgroundColor: getPriceColor((maxPrice + minPrice) / 2, minPrice, maxPrice) }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">${minPrice.toFixed(2)}</span>
                <div className="w-8 h-6 rounded" style={{ backgroundColor: getPriceColor(minPrice, minPrice, maxPrice) }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BoundsUpdater: React.FC<{ onBoundsChange: (bounds: LatLngBounds) => void }> = ({ onBoundsChange }) => {
  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds();
      const center = bounds.getCenter();
      const northEast = bounds.getNorthEast();
      const southWest = bounds.getSouthWest();
      
      const latDiff = (northEast.lat - southWest.lat) * 0.5;
      const lngDiff = (northEast.lng - southWest.lng) * 0.5;
      
      const smallerBounds = new LatLngBounds(
        [center.lat - latDiff, center.lng - lngDiff],
        [center.lat + latDiff, center.lng + lngDiff]
      );
      
      onBoundsChange(smallerBounds);
    }
  });

  return null;
};

const createCustomMarker = (apartment: Apartment, isSelected: boolean, isSaved: boolean) => {
  const pricePerSqFt = apartment.rent / apartment.squareFootage;
  
  return new DivIcon({
    className: 'custom-marker',
    html: `
      <div class="${isSelected ? 'scale-110 ring-2 ring-blue-500' : ''} transform transition-transform duration-200">
        <div class="relative">
          <div class="${isSelected ? 'bg-blue-900 text-white' : 'bg-dark-200/95 backdrop-blur-sm text-gray-100'} 
                      px-2 py-1 rounded-lg shadow-lg border border-dark-300 text-sm">
            <div class="font-medium truncate" style="max-width: 96px">
              ${apartment.title}
            </div>
            <div class="font-semibold text-blue-400">
              $${pricePerSqFt.toFixed(2)}/ft²
            </div>
            ${isSaved ? '<svg class="w-4 h-4 text-blue-500 fill-current absolute top-1 right-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>' : ''}
          </div>
        </div>
      </div>
    `,
    iconSize: [96, 48],
    iconAnchor: [48, 48],
    popupAnchor: [0, -48]
  });
};

export const Map: React.FC<Props> = ({ 
  apartments, 
  selectedApartment, 
  onMarkerClick,
  savedHomes,
  onToggleSave,
  onBoundsChange,
  averagePricePerSqFt,
  neighborhoods
}) => {
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const center = { lat: 37.7749, lng: -122.4194 };

  useEffect(() => {
    const timer = setTimeout(() => {
      const mapContainer = document.querySelector('.leaflet-container');
      if (mapContainer) {
        mapContainer.classList.add('map-visible');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const prices = apartments.map(apt => apt.rent / apt.squareFootage);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const markers = useMemo(() => 
    apartments.map((apartment) => {
      const isSelected = selectedApartment?.id === apartment.id;
      const isSaved = savedHomes.some(home => home.apartmentId === apartment.id);
      const icon = createCustomMarker(apartment, isSelected, isSaved);
      
      return (
        <Marker
          key={apartment.id}
          position={[apartment.latitude, apartment.longitude]}
          icon={icon}
          eventHandlers={{
            click: () => onMarkerClick(apartment)
          }}
        >
          <Popup className="dark-theme-popup">
            <div className="bg-dark-200 text-gray-100 rounded-lg overflow-hidden">
              <img 
                src={apartment.image} 
                alt={apartment.title}
                className="w-full h-32 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-3 space-y-2">
                <h3 className="font-semibold text-gray-100">{apartment.title}</h3>
                <p className="text-gray-300">${apartment.rent.toLocaleString()}/month</p>
                <p className="text-gray-300">{apartment.squareFootage} sq ft</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="font-medium text-blue-400">
                    ${(apartment.rent / apartment.squareFootage).toFixed(2)}/sq ft
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(apartment.id);
                    }}
                    className={`p-2 rounded-full ${
                      isSaved ? 'text-blue-500' : 'text-gray-400 hover:text-blue-400'
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      );
    }),
    [apartments, selectedApartment, savedHomes, onMarkerClick, onToggleSave]
  );

  const heatmapCircles = useMemo(() => {
    if (!showHeatmap) return null;

    const groups = groupNearbyListings(apartments);

    return groups.map((group, index) => {
      // Base radius now depends on area coverage needed
      const radius = 1000 + (group.listings.length * 100);
      
      return (
        <Circle
          key={`group-${index}`}
          center={group.center}
          radius={radius}
          pathOptions={{
            fillColor: getPriceColor(group.avgPrice, minPrice, maxPrice),
            fillOpacity: 0.5,
            weight: 1,
            color: 'white',
            opacity: 0.2
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold">Area Overview</h3>
              <p className="text-sm font-medium">Average: ${group.avgPrice.toFixed(2)}/ft²</p>
              <p className="text-sm text-gray-500 mt-1">{group.listings.length} listings in this area</p>
              <div className="mt-2 space-y-1">
                {group.listings.map(apt => (
                  <div key={apt.id} className="text-sm">
                    <span className="font-medium">{apt.title}:</span>
                    <span className="ml-1">${(apt.rent / apt.squareFootage).toFixed(2)}/ft²</span>
                  </div>
                ))}
              </div>
            </div>
          </Popup>
        </Circle>
      );
    });
  }, [apartments, showHeatmap, minPrice, maxPrice]);

  return (
    <MapContainer
      center={center}
      zoom={12}
      className="w-full h-full rounded-lg shadow-lg border border-dark-300"
      preferCanvas={true}
      zoomControl={false}
      minZoom={9}
      maxZoom={18}
      renderer={L.canvas()}
      updateWhenZooming={false}
      updateWhenIdle={true}
    >
      <MapControls 
        averagePricePerSqFt={averagePricePerSqFt} 
        showHeatmap={showHeatmap}
        onToggleHeatmap={() => setShowHeatmap(!showHeatmap)}
        apartments={apartments}
      />
      <BoundsUpdater onBoundsChange={onBoundsChange} />
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        maxZoom={18}
        minZoom={9}
        updateWhenIdle={true}
        updateWhenZooming={false}
      />
      {heatmapCircles}
      {markers}
    </MapContainer>
  );
};