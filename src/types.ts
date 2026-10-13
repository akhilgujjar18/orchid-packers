export interface QuoteFormData {
  fullName: string;
  mobile: string;
  email?: string;
  movingFrom: string;
  movingTo: string;
  serviceRequired: string;
  inventorySize: string;
  moveDate?: string;
  notes?: string;
}

export interface QuoteResponse {
  success: boolean;
  quoteId?: string;
  message?: string;
  error?: string;
  lead?: {
    id: string;
    fullName: string;
    mobile: string;
    movingFrom: string;
    movingTo: string;
    serviceRequired: string;
    inventorySize?: string;
    submittedAt: string;
  };
}

export interface RelocationService {
  id: string;
  title: string;
  category?: string;
  shortDesc: string;
  detailedDesc: string;
  startingPrice: string;
  idealFor: string;
  features: string[];
  packingMaterials: string[];
  badge?: string;
}

export interface PuneLocality {
  name: string;
  zone: 'West Pune' | 'East Pune' | 'Central Pune' | 'PCMC / North' | 'South Pune';
  pincode: string;
  avgPickupTime: string;
  featuredHub?: boolean;
}

export interface InterCityRoute {
  destination: string;
  distance: string;
  transitTime: string;
  frequency: string;
  highlights: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Pricing' | 'Packing' | 'Safety' | 'Pune Local';
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  companyOrLocality: string;
  rating: number;
  date: string;
  moveType: string;
  review: string;
}
