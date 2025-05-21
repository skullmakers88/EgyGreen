export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
  isOrganic: boolean;
  isSeasonal: boolean;
  details?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
}