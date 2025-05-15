import { Product } from '../types';

export let products: Product[] = [
  {
    id: 1,
    name: 'Egyptian Fava Beans (Foul)',
    category: 'Legumes',
    images: ['/images/Beans.png'],
    description: 'Premium Egyptian fava beans, perfect for making the traditional Foul Medames.',
    isFeatured: true,
    isOrganic: true,
    isSeasonalPick: true
  },
  
  {
    id: 2,
    name: 'White Beans',
    category: 'Legumes',
    images: ['https://cdn.pixabay.com/photo/2021/08/24/17/56/white-beans-6571302_1280.jpg'],
    description: 'High-quality white beans, ideal for soups and traditional dishes.',
    isFeatured: true,
    isOrganic: true
  },
  {
    id: 3,
    name: 'Grapes',
    category: 'Fruits',
    images: ['https://cdn.pixabay.com/photo/2017/08/22/17/55/grape-2669939_1280.jpg'],
    description: 'Fresh, juicy grapes bursting with natural sweetness — a delicious and nutritious treat enjoyed across cultures.',
    isOrganic: true,
    isFeatured: true
  },
  {
    id: 4,
    name: 'Egyptian Lentils',
    category: 'Legumes',
    images: ['https://cdn.pixabay.com/photo/2023/02/06/17/34/lentils-7772450_1280.jpg'],
    description: 'Premium quality lentils, perfect for Koshari and soups.',
    isSeasonalPick: true
  },
  {
    id: 5,
    name: 'Strawberries',
    category: 'Fruits',
    images: ['https://cdn.pixabay.com/photo/2017/11/16/02/34/strawberries-2953100_1280.jpg'],
    description: 'Fresh, ripe strawberries packed with vibrant flavor — a sweet and nutritious delight loved around the world.',
    isFeatured: true,
    isOrganic: true
  },
  {
    id: 6,
    name: 'Egyptian Garlic',
    category: 'Vegetables',
    images: ['https://cdn.pixabay.com/photo/2016/12/17/18/49/garlic-1914116_1280.jpg'],
    description: 'Flavorful Egyptian garlic, known for its strong aroma and taste.',
    isSeasonalPick: true
  },
  {
    id: 7,
    name: 'Pommegranate',
    category: 'Fruits',
    images: ['https://cdn.pixabay.com/photo/2012/01/20/22/45/pomegranate-11871_1280.jpg'],
    description: 'Fresh, ruby-red pomegranates filled with jewel-like seeds — a tangy, antioxidant-rich superfruit treasured across cultures.',
    isOrganic: true
  },
  {
    id: 8,
    name: 'Oranges',
    category: 'Fruits',
    images: ['https://cdn.pixabay.com/photo/2014/02/23/16/41/oranges-273024_1280.jpg'],
    description: 'Fresh, sun-ripened oranges bursting with citrusy sweetness — a refreshing and vitamin-rich fruit cherished worldwide.',
    isFeatured: true
  },
  {
    id: 9,
    name: 'Date',
    category: 'Fruits',
    images: ['https://cdn.pixabay.com/photo/2013/12/03/23/00/date-palm-223247_1280.jpg'],
    description: 'Sweet, succulent dates packed with rich flavor and natural energy — a wholesome and satisfying snack cherished in many traditions.',
    isFeatured: true,
    isOrganic: true,
    isSeasonalPick: true
  },
  {
    id: 10,
    name: 'Sweet Potatoes',
    category: 'Fruits',
    images: ['https://cdn.pixabay.com/photo/2016/09/13/08/51/sweet-potato-1666707_1280.jpg'],
    description: 'Earthy, tender sweet potatoes with a naturally rich sweetness — a hearty and nourishing delight enjoyed in kitchens around the world.',
    isFeatured: true,
    isOrganic: true,
    isSeasonalPick: true
  },
  {
    id: 11,
    name: 'Onions',
    category: 'Vegetables',
    images: ['https://cdn.pixabay.com/photo/2020/05/18/15/37/onions-5187022_1280.jpg'],
    description: 'Pungent and flavorful onions that add depth and aroma — a versatile staple at the heart of countless savory dishes worldwide.',
    isFeatured: true,
    isOrganic: true,
    isSeasonalPick: true
  },
];

// Function to update products
export const updateProducts = (newProducts: Product[]) => {
  products = newProducts;
  localStorage.setItem('products', JSON.stringify(products));
};

// Function to initialize products from localStorage
export const initializeProducts = () => {
  const storedProducts = localStorage.getItem('products');
  if (storedProducts) {
    products = JSON.parse(storedProducts);
  }
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getSeasonalProducts = (): Product[] => {
  return products.filter(product => product.isSeasonalPick);
};

