import { LatLngTuple } from 'leaflet';

export interface Apartment {
  id: number;
  title: string;
  rent: number;
  squareFootage: number;
  latitude: number;
  longitude: number;
  image: string;
  bedrooms: number;
  bathrooms: number;
}

export interface SavedHome {
  apartmentId: number;
  savedAt: Date;
}

export interface Neighborhood {
  name: string;
  center: LatLngTuple;
  radius: number;
  avgPricePerSqFt: number;
}