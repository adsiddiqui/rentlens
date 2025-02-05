import React from 'react';
import { Building2, Map as MapIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-200/95 backdrop-blur-md border-b border-dark-300 z-[2000]">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-accent-400 to-accent-600 p-2 rounded-lg transition-transform group-hover:scale-110">
              <Building2 className="h-6 w-6 text-white transition-transform group-hover:rotate-12" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-100 group-hover:text-accent-500 transition-colors">RentLens</h1>
              <p className="text-sm text-gray-400">Rent smarter in the Bay Area</p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/' 
                  ? 'bg-accent-500/20 text-accent-400' 
                  : 'text-gray-400 hover:text-accent-400'
              }`}
            >
              <MapIcon className="h-4 w-4" />
              <span className="font-medium">Map</span>
            </Link>
            <Link
              to="/about"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/about' 
                  ? 'bg-accent-500/20 text-accent-400' 
                  : 'text-gray-400 hover:text-accent-400'
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span className="font-medium">About</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};