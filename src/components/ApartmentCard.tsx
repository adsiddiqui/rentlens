import React from 'react';
import { Home, Ruler, Bath, Heart } from 'lucide-react';
import { Apartment } from '../types';

interface Props {
  apartment: Apartment;
  isSelected: boolean;
  isSaved: boolean;
  onClick: () => void;
  onToggleSave: () => void;
}

export const ApartmentCard: React.FC<Props> = ({ 
  apartment, 
  isSelected, 
  isSaved,
  onClick, 
  onToggleSave 
}) => {
  return (
    <div 
      className={`bg-dark-200 rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl border border-dark-300 ${
        isSelected ? 'ring-2 ring-accent-500' : ''
      }`}
    >
      <div className="relative">
        <img 
          src={apartment.image} 
          alt={apartment.title}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={onClick}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave();
          }}
          className={`absolute top-2 right-2 p-2 rounded-full backdrop-blur-md ${
            isSaved 
              ? 'bg-accent-500/90 text-white' 
              : 'bg-dark-200/90 text-gray-400 hover:bg-dark-300/90'
          }`}
        >
          <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute bottom-2 right-2 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          ${apartment.rent.toLocaleString()}/mo
        </div>
      </div>
      
      <div className="p-4" onClick={onClick}>
        <h3 className="text-lg font-semibold mb-2 text-gray-100">{apartment.title}</h3>
        
        <div className="flex items-center gap-4 text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Home size={16} />
            <span className="text-sm">{apartment.bedrooms} {apartment.bedrooms === 1 ? 'bed' : 'beds'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} />
            <span className="text-sm">{apartment.bathrooms} {apartment.bathrooms === 1 ? 'bath' : 'baths'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler size={16} />
            <span className="text-sm">{apartment.squareFootage} sq ft</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-accent-400 font-medium">
            ${(apartment.rent / apartment.squareFootage).toFixed(2)}/sq ft
          </div>
          <button 
            className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};