export interface Product {
  id: number;
  name: string;
  category: string;
  images: string[];
  description: string;
  isFeatured?: boolean;
  isOrganic?: boolean;
  isSeasonalPick?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  imageUrl?: string;
}