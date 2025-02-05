import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Heart, List, Map as MapIcon } from 'lucide-react';
import { Map } from '../components/Map';
import { ApartmentCard } from '../components/ApartmentCard';
import { apartments as defaultApartments, neighborhoods } from '../data';
import { Apartment, SavedHome } from '../types';
import { LatLngBounds } from 'leaflet';

export const MapPage: React.FC = () => {
  const [apartments, setApartments] = useState<Apartment[]>(defaultApartments);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showMap, setShowMap] = useState(true);
  const [mapBounds, setMapBounds] = useState<LatLngBounds | null>(null);
  const [savedHomes, setSavedHomes] = useState<SavedHome[]>(() => {
    const saved = localStorage.getItem('savedHomes');
    return saved ? JSON.parse(saved) : [];
  });
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem('savedHomes', JSON.stringify(savedHomes));
  }, [savedHomes]);

  const toggleSaveHome = (apartmentId: number) => {
    setSavedHomes(prev => {
      const isAlreadySaved = prev.some(home => home.apartmentId === apartmentId);
      if (isAlreadySaved) {
        return prev.filter(home => home.apartmentId !== apartmentId);
      } else {
        return [...prev, { apartmentId, savedAt: new Date() }];
      }
    });
  };

  const filteredApartments = apartments.filter(apt => {
    const matchesSearch = apt.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = apt.rent >= priceRange[0] && apt.rent <= priceRange[1];
    const matchesSaved = !showSaved || savedHomes.some(home => home.apartmentId === apt.id);
    const inBounds = !mapBounds || mapBounds.contains([apt.latitude, apt.longitude]);
    
    return matchesSearch && matchesPrice && matchesSaved && (!showMap || inBounds);
  });

  const calculateAveragePrice = () => {
    if (filteredApartments.length === 0) return 0;
    const total = filteredApartments.reduce((sum, apt) => sum + (apt.rent / apt.squareFootage), 0);
    return total / filteredApartments.length;
  };

  const averagePricePerSqFt = calculateAveragePrice();

  return (
    <div className="min-h-screen bg-dark-100 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search apartments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-dark-300/80 backdrop-blur-sm rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all focus:bg-dark-300"
              />
            </div>

            <div className="flex items-center gap-2 bg-dark-300/80 backdrop-blur-sm p-2 rounded-lg transition-all hover:bg-dark-300">
              <SlidersHorizontal className="text-gray-400 h-4 w-4" />
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-24"
                />
                <span className="text-sm text-gray-300 min-w-[100px]">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-24"
                />
              </div>
            </div>

            <button
              onClick={() => setShowSaved(!showSaved)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                showSaved 
                  ? 'bg-accent-500 text-white hover:bg-accent-600' 
                  : 'bg-dark-300/80 backdrop-blur-sm text-gray-300 hover:bg-dark-300'
              }`}
            >
              <Heart className={`h-4 w-4 ${showSaved ? 'fill-current' : ''}`} />
              Saved ({savedHomes.length})
            </button>

            <button
              onClick={() => setShowMap(!showMap)}
              className="flex items-center gap-2 px-4 py-2 bg-dark-300/80 backdrop-blur-sm text-gray-300 rounded-lg hover:bg-dark-300 transition-all"
            >
              {showMap ? <List className="h-4 w-4" /> : <MapIcon className="h-4 w-4" />}
              {showMap ? 'List' : 'Map'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {showMap ? (
            <>
              <div className="lg:col-span-2 h-[calc(100vh-160px)] relative">
                <Map
                  apartments={filteredApartments}
                  selectedApartment={selectedApartment}
                  onMarkerClick={setSelectedApartment}
                  savedHomes={savedHomes}
                  onToggleSave={toggleSaveHome}
                  onBoundsChange={setMapBounds}
                  averagePricePerSqFt={averagePricePerSqFt}
                  neighborhoods={neighborhoods}
                />
              </div>
              <div className="space-y-4">
                <div className="bg-dark-200 p-4 rounded-lg shadow-lg border border-dark-300">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-100">
                      {showSaved ? 'Saved Homes' : 'Available Apartments'}
                      <span className="text-sm text-gray-400 ml-2">
                        ({filteredApartments.length} listings)
                      </span>
                    </h2>
                  </div>
                  <div className="space-y-4 h-[calc(100vh-240px)] overflow-y-auto">
                    {filteredApartments.map((apartment) => (
                      <ApartmentCard
                        key={apartment.id}
                        apartment={apartment}
                        isSelected={selectedApartment?.id === apartment.id}
                        isSaved={savedHomes.some(home => home.apartmentId === apartment.id)}
                        onClick={() => setSelectedApartment(apartment)}
                        onToggleSave={() => toggleSaveHome(apartment.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApartments.map((apartment) => (
                <ApartmentCard
                  key={apartment.id}
                  apartment={apartment}
                  isSelected={false}
                  isSaved={savedHomes.some(home => home.apartmentId === apartment.id)}
                  onClick={() => {
                    setSelectedApartment(apartment);
                    setShowMap(true);
                  }}
                  onToggleSave={() => toggleSaveHome(apartment.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};