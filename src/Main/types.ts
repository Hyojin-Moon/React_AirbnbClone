export interface Listing {
    id: string;
    title: string;
    location: string;
    images: string[];
    price: number;
    rating: number;
    reviewCount: number;
    maxGuests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    amenities: string[];
    description: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  }