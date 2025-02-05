import { Apartment, Neighborhood } from './types';

// Complete list of apartments
export const apartments: Apartment[] = [
  // San Francisco Listings
  {
    id: 1,
    title: "The Quinn",
    rent: 3285,
    squareFootage: 946,
    latitude: 37.774548,
    longitude: -122.409325,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 2
  },
  {
    id: 18,
    title: "38 Dolores",
    rent: 3998,
    squareFootage: 800,
    latitude: 37.768284,
    longitude: -122.42714,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 19,
    title: "3201 Washington",
    rent: 2950,
    squareFootage: 550,
    latitude: 37.789978,
    longitude: -122.44626,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 20,
    title: "Carillon Tower",
    rent: 2625,
    squareFootage: 600,
    latitude: 37.783936,
    longitude: -122.42392,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 22,
    title: "2650 Franklin",
    rent: 2795,
    squareFootage: 500,
    latitude: 37.799103,
    longitude: -122.425575,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 23,
    title: "333 Fremont",
    rent: 4945,
    squareFootage: 900,
    latitude: 37.787388,
    longitude: -122.39276,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 2
  },
  {
    id: 24,
    title: "Frontenac Apartments",
    rent: 2100,
    squareFootage: 650,
    latitude: 37.785625,
    longitude: -122.41608,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 25,
    title: "828 Taylor",
    rent: 3450,
    squareFootage: 1000,
    latitude: 37.790237,
    longitude: -122.41191,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 27,
    title: "Edgewater",
    rent: 2832,
    squareFootage: 600,
    latitude: 37.772366,
    longitude: -122.39705,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 28,
    title: "1630 California Street",
    rent: 2495,
    squareFootage: 850,
    latitude: 37.790653,
    longitude: -122.42136,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 29,
    title: "500 Leavenworth Apartments",
    rent: 1800,
    squareFootage: 450,
    latitude: 37.78582,
    longitude: -122.41443,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 30,
    title: "1700 California Street",
    rent: 3595,
    squareFootage: 666,
    latitude: 37.790455,
    longitude: -122.423096,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  // New SF Listings from CSV
  {
    id: 101,
    title: "1830 Alemany",
    rent: 2150,
    squareFootage: 504,
    latitude: 37.722862,
    longitude: -122.43845,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 102,
    title: "790 Church Street",
    rent: 2500,
    squareFootage: 450,
    latitude: 37.758244,
    longitude: -122.42838,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 103,
    title: "4728 Mission St",
    rent: 2095,
    squareFootage: 500,
    latitude: 37.722656,
    longitude: -122.4367,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 104,
    title: "107 Collingwood St",
    rent: 2295,
    squareFootage: 500,
    latitude: 37.760643,
    longitude: -122.435905,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 105,
    title: "1710 19th Ave",
    rent: 2350,
    squareFootage: 600,
    latitude: 37.75581,
    longitude: -122.476204,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 106,
    title: "816 Taraval St",
    rent: 2500,
    squareFootage: 550,
    latitude: 37.74333,
    longitude: -122.47506,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 107,
    title: "4099 Cesar Chavez",
    rent: 2095,
    squareFootage: 369,
    latitude: 37.747334,
    longitude: -122.43713,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 108,
    title: "2365 24th Ave",
    rent: 2600,
    squareFootage: 600,
    latitude: 37.743492,
    longitude: -122.48143,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 109,
    title: "20 Leo St",
    rent: 2400,
    squareFootage: 650,
    latitude: 37.72271,
    longitude: -122.43678,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 110,
    title: "217 Jersey St",
    rent: 2450,
    squareFootage: 650,
    latitude: 37.75049,
    longitude: -122.430084,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },

  // Berkeley/Oakland Area Listings
  {
    id: 16,
    title: "2732 Haste Street",
    rent: 3150,
    squareFootage: 598,
    latitude: 37.86649,
    longitude: -122.25238,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 31,
    title: "Berkeley Central",
    rent: 2895,
    squareFootage: 675,
    latitude: 37.870277,
    longitude: -122.268072,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 32,
    title: "Southside Commons",
    rent: 2450,
    squareFootage: 550,
    latitude: 37.867153,
    longitude: -122.256447,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 33,
    title: "Telegraph Gardens",
    rent: 3200,
    squareFootage: 800,
    latitude: 37.865584,
    longitude: -122.259365,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 34,
    title: "Downtown Berkeley Apartments",
    rent: 2750,
    squareFootage: 600,
    latitude: 37.871893,
    longitude: -122.273019,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 17,
    title: "245 Lee St",
    rent: 2748,
    squareFootage: 650,
    latitude: 37.81327,
    longitude: -122.25843,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 1
  },

  // Richmond District Listings from CSV
  {
    id: 201,
    title: "600 Stanyan St",
    rent: 2650,
    squareFootage: 600,
    latitude: 37.77084,
    longitude: -122.45355,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 202,
    title: "347 21st Ave",
    rent: 2700,
    squareFootage: 600,
    latitude: 37.781303,
    longitude: -122.48085,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 203,
    title: "761 6th Ave",
    rent: 2495,
    squareFootage: 550,
    latitude: 37.774323,
    longitude: -122.463806,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 204,
    title: "767 6th Ave",
    rent: 2995,
    squareFootage: 700,
    latitude: 37.774387,
    longitude: -122.464134,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 205,
    title: "559 24th Ave",
    rent: 2850,
    squareFootage: 568,
    latitude: 37.77896,
    longitude: -122.48391,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 206,
    title: "595 22nd Ave",
    rent: 2450,
    squareFootage: 600,
    latitude: 37.77661,
    longitude: -122.48152,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 207,
    title: "75 Heather Ave",
    rent: 3000,
    squareFootage: 864,
    latitude: 37.784634,
    longitude: -122.4531,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 208,
    title: "2750 McAllister St",
    rent: 2500,
    squareFootage: 650,
    latitude: 37.77565,
    longitude: -122.45741,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 209,
    title: "342 8th Ave",
    rent: 2600,
    squareFootage: 650,
    latitude: 37.78202,
    longitude: -122.46618,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 210,
    title: "435 Euclid Ave",
    rent: 2645,
    squareFootage: 469,
    latitude: 37.7838,
    longitude: -122.453384,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  // New Oakland Area Listings
  {
    id: 301,
    title: "Orion Apartments",
    rent: 2418,
    squareFootage: 600,
    latitude: 37.78757,
    longitude: -122.25618,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 302,
    title: "Portico Waterfront",
    rent: 2420,
    squareFootage: 550,
    latitude: 37.787674,
    longitude: -122.25951,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 303,
    title: "Caspian",
    rent: 2410,
    squareFootage: 600,
    latitude: 37.78885,
    longitude: -122.25787,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 304,
    title: "Artizan",
    rent: 2430,
    squareFootage: 580,
    latitude: 37.787846,
    longitude: -122.25744,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 305,
    title: "Aqua Via",
    rent: 2780,
    squareFootage: 790,
    latitude: 37.792793,
    longitude: -122.268974,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 306,
    title: "Garden Court",
    rent: 2589,
    squareFootage: 800,
    latitude: 37.778553,
    longitude: -122.27939,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 307,
    title: "Lake Merritt Apartments",
    rent: 2495,
    squareFootage: 500,
    latitude: 37.804405,
    longitude: -122.26196,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  },
  {
    id: 308,
    title: "Jackson Courtyard",
    rent: 2495,
    squareFootage: 600,
    latitude: 37.80221,
    longitude: -122.26533,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 309,
    title: "Point Alameda",
    rent: 2450,
    squareFootage: 575,
    latitude: 37.77089,
    longitude: -122.28525,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 310,
    title: "777 Broadway",
    rent: 2445,
    squareFootage: 592,
    latitude: 37.80012,
    longitude: -122.27412,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 311,
    title: "Link Apartments Four12",
    rent: 2599,
    squareFootage: 700,
    latitude: 37.79503,
    longitude: -122.26795,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 312,
    title: "Renew on Merritt",
    rent: 2520,
    squareFootage: 650,
    latitude: 37.796154,
    longitude: -122.25659,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80",
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 313,
    title: "Fourth Street East",
    rent: 2535,
    squareFootage: 625,
    latitude: 37.794373,
    longitude: -122.269615,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 314,
    title: "Lydian",
    rent: 2597,
    squareFootage: 695,
    latitude: 37.80158,
    longitude: -122.2656,
    image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?auto=format&fit=crop&q=80",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 315,
    title: "Eleven Fifty Clay",
    rent: 2489,
    squareFootage: 500,
    latitude: 37.803356,
    longitude: -122.274506,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    bedrooms: 0,
    bathrooms: 1
  }
];

// Calculate neighborhood centers based on actual listing locations
const calculateNeighborhoodCenter = (listings: Apartment[]) => {
  if (listings.length === 0) return null;
  const avgLat = listings.reduce((sum, apt) => sum + apt.latitude, 0) / listings.length;
  const avgLng = listings.reduce((sum, apt) => sum + apt.longitude, 0) / listings.length;
  return [avgLat, avgLng] as [number, number];
};

// Define neighborhoods with dynamic centers
export const neighborhoods: Neighborhood[] = [
  {
    name: "Mission District",
    center: [37.758, -122.415],
    radius: 800,
    avgPricePerSqFt: 4.85
  },
  {
    name: "Hayes Valley",
    center: [37.776, -122.424],
    radius: 600,
    avgPricePerSqFt: 5.20
  },
  {
    name: "SOMA",
    center: [37.778, -122.398],
    radius: 800,
    avgPricePerSqFt: 4.95
  },
  {
    name: "Nob Hill",
    center: [37.793, -122.414],
    radius: 700,
    avgPricePerSqFt: 5.50
  },
  {
    name: "Pacific Heights",
    center: [37.792, -122.434],
    radius: 800,
    avgPricePerSqFt: 6.20
  },
  {
    name: "North Beach",
    center: [37.800, -122.409],
    radius: 700,
    avgPricePerSqFt: 5.80
  },
  {
    name: "Castro",
    center: [37.762, -122.435],
    radius: 700,
    avgPricePerSqFt: 5.35
  },
  {
    name: "Berkeley",
    center: [37.871, -122.273],
    radius: 1200,
    avgPricePerSqFt: 4.15
  },
  {
    name: "Oakland",
    center: [37.804, -122.271],
    radius: 1200,
    avgPricePerSqFt: 3.75
  },
  {
    name: "Richmond District",
    center: [37.782, -122.483],
    radius: 1000,
    avgPricePerSqFt: 4.25
  },
  {
    name: "Downtown Oakland",
    center: [37.804, -122.271],
    radius: 1200,
    avgPricePerSqFt: 3.95
  },
  {
    name: "Lake Merritt",
    center: [37.802, -122.262],
    radius: 800,
    avgPricePerSqFt: 4.15
  },
  {
    name: "Alameda",
    center: [37.776, -122.277],
    radius: 1000,
    avgPricePerSqFt: 3.65
  }
];

// Update neighborhood centers and average prices based on actual listings
neighborhoods.forEach(neighborhood => {
  const listingsInArea = apartments.filter(apt => {
    const dx = (apt.longitude - neighborhood.center[1]) * 111000 * Math.cos(neighborhood.center[0] * Math.PI / 180);
    const dy = (apt.latitude - neighborhood.center[0]) * 111000;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= neighborhood.radius;
  });

  if (listingsInArea.length > 0) {
    // Update center based on actual listings
    const newCenter = calculateNeighborhoodCenter(listingsInArea);
    if (newCenter) {
      neighborhood.center = newCenter;
    }

    // Update average price
    const avgPrice = listingsInArea.reduce((sum, apt) => sum + (apt.rent / apt.squareFootage), 0) / listingsInArea.length;
    neighborhood.avgPricePerSqFt = Number(avgPrice.toFixed(2));
  }
});