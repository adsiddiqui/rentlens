import React from 'react';
import { Upload } from 'lucide-react';
import { Apartment } from '../types';

interface Props {
  onApartmentsLoaded: (apartments: Apartment[]) => void;
}

export const CsvUpload: React.FC<Props> = ({ onApartmentsLoaded }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n');
      const headers = lines[0].split(',');
      
      const apartments: Apartment[] = lines.slice(1)
        .filter(line => line.trim())
        .map((line, index) => {
          const values = line.split(',');
          return {
            id: parseInt(values[0]) || index + 1,
            title: values[1],
            rent: parseFloat(values[2]),
            squareFootage: parseInt(values[3]),
            latitude: parseFloat(values[4]),
            longitude: parseFloat(values[5]),
            image: values[6],
            bedrooms: parseFloat(values[7]),
            bathrooms: parseFloat(values[8])
          };
        });

      onApartmentsLoaded(apartments);
    };
    reader.readAsText(file);
  };

  return (
    <div className="mb-4">
      <label 
        htmlFor="csv-upload" 
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
      >
        <Upload size={18} />
        Upload Listings CSV
      </label>
      <input
        id="csv-upload"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
};