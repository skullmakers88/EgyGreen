import { Product } from '../types';

export const featuredProducts: Product[] = [
  {
    id: 'strawberries',
    name: 'Fresh Strawberries',
    description: 'Sweet, juicy strawberries picked at peak ripeness.',
    category: 'Fruits',
    images: [
      'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg',
      'https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg',
      'https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg',
    ],
    isOrganic: true,
    isSeasonal: false,
    details: 'Our strawberries are grown in nutrient-rich soil and harvested by hand to ensure the best quality and flavor. Available April through July.'
  },
  {
    id: 'carrots',
    name: 'Carrots',
    description: 'Sweet orange Fresh carrots.',
    category: 'Vegetables',
    images: [
      'https://cdn.pixabay.com/photo/2015/03/14/14/00/carrots-673184_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/06/23/23/40/carrot-5334163_1280.jpg',
    ],
    isOrganic: true,
    isSeasonal: false,
    details: 'Our rainbow carrots are as nutritious as they are beautiful, with sweet flavor and crunchy texture.'
  },
  {
    id: 'Egyptian Fava Beans (Foul)',
    name: 'Egyptian Fava Beans (Foul)',
    description: 'Hearty, nutrient-dense Egyptian fava beanssun-dried and ready for your kitchen creations.',
    category: 'Legumes',
    images: [
      '/images/Beans.png',
      'https://cdn.pixabay.com/photo/2025/02/12/06/36/beans-9400499_1280.jpg'
      
    ],
    isOrganic: false,
    isSeasonal: false,
    details: ''
  },
  {
    id: 'Pommegranate',
    name: 'Pommegranate',
    description: 'Fresh, ruby-red pomegranates filled with jewel-like seeds',
    category: 'Fruits',
    images: [
      'https://cdn.pixabay.com/photo/2012/01/20/22/45/pomegranate-11871_1280.jpg',
      'https://cdn.pixabay.com/photo/2021/05/14/16/06/pomegranate-6253869_1280.jpg'
    ],
    isOrganic: true,
    isSeasonal: false,
    details: ''
  },
  {
    id: 'tomatoes',
    name: 'Heirloom Tomatoes',
    description: 'Flavorful, colorful varieties grown with care.',
    category: 'Vegetables',
    images: [
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
      'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
      'https://images.pexels.com/photos/96616/pexels-photo-96616.jpeg',
    ],
    isOrganic: true,
    isSeasonal: false,
    details: 'Our heirloom tomatoes include varieties that have been passed down through generations, selected for their exceptional flavor and unique appearance.'
  },
  
  {
    id: 'White Beans',
    name: 'White Beans',
    description: 'Aromatic, flavorful leaves for culinary excellence.',
    category: 'Legumes',
    images: [
      'https://cdn.pixabay.com/photo/2021/08/24/17/56/white-beans-6571302_1280.jpg',
      'https://cdn.pixabay.com/photo/2021/08/24/18/01/white-beans-6571314_1280.jpg'
    ],
    isOrganic: false,
    isSeasonal: false,
    details: 'Our basil is grown in optimal conditions to ensure the most flavorful leaves, perfect for pesto, caprese salad, or any Italian dish.'
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    description: 'Assorted lettuce varieties for the perfect salad.',
    category: 'Vegetables',
    images: [
      'https://cdn.pixabay.com/photo/2015/09/14/19/53/nature-940032_1280.jpg',
      'https://cdn.pixabay.com/photo/2022/04/12/05/09/farm-7127193_1280.jpg'
    ],
    isOrganic: true,
    isSeasonal: false,
    details: 'Our mixed lettuce includes a variety of textures and flavors, from crisp romaine to tender butter lettuce.'
  },
  {
    id: 'Fresh Spaghetti Pasta',
    name: 'Fresh Spaghetti Pasta',
    description: 'Spaghetti made from premium durum wheat, perfectly shaped for soaking up sauces.',
    category: 'Pasta',
    images: [
      'https://cdn.pixabay.com/photo/2020/05/10/14/25/fresh-pasta-5154229_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/06/17/19/09/pasta-1463918_1280.jpg'
    ],
    isOrganic: false,
    isSeasonal: false,
    details: 'Our mixed lettuce includes a variety of textures and flavors, from crisp romaine to tender butter lettuce.'
  }

];

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: 'bell-peppers',
    name: 'Bell Peppers',
    description: 'Colorful, crunchy peppers in red, yellow, and orange.',
    category: 'Vegetables',
    images: [
      'https://cdn.pixabay.com/photo/2021/10/03/11/45/vegetables-6677791_1280.jpg',
      'https://cdn.pixabay.com/photo/2014/10/22/21/54/bell-peppers-499068_1280.jpg',
    ],
    isOrganic: true,
    isSeasonal: false,
    details: 'Our bell peppers are grown to perfect ripeness, ensuring maximum sweetness and nutritional value.'
  },
  
  {
    id: 'Dates',
    name: 'Yellow Dates',
    description: 'Sweet, succulent dates packed with rich flavor and natural energy',
    category: 'Fruits',
    images: [
      'https://cdn.pixabay.com/photo/2013/01/05/14/30/date-palm-fruit-73950_1280.jpg',
      'https://cdn.pixabay.com/photo/2013/12/03/23/00/date-palm-223247_1280.jpg'
      
    ],
    isOrganic: false,
    isSeasonal: false,
    details: ''
  },
  {
    id: 'Orange',
    name: 'Oranges',
    description: 'Fresh, sun-ripened oranges bursting with citrusy sweetness',
    category: 'Fruits',
    images: [
      'https://cdn.pixabay.com/photo/2014/02/23/16/41/oranges-273024_1280.jpg',
      'https://images.pexels.com/photos/2661834/pexels-photo-2661834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      
    ],
    isOrganic: false,
    isSeasonal: false,
    details: ''
  },
  
  {
    id: 'Egyptian Lentils',
    name: 'Egyptian Lentils',
    description: 'Premium quality lentils, perfect for Koshari and soups.',
    category: 'Legumes',
    images: [
      'https://cdn.pixabay.com/photo/2023/02/06/17/34/lentils-7772450_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/01/18/13/14/krupa-4775249_1280.jpg'
      
    ],
    isOrganic: false,
    isSeasonal: false,
    details: 'Our cilantro is harvested fresh daily for maximum flavor and aroma, perfect for Mexican, Thai, and Indian cuisine.'
  },
  {
    id: 'Onions',
    name: 'Onions',
    description: 'Pungent and flavorful onions that add depth and aroma to the heart of countless dishes worldwide.',
    category: 'Vegetables',
    images: [
      'https://cdn.pixabay.com/photo/2020/05/18/15/37/onions-5187022_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/06/02/01/35/vegetables-1430062_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/05/16/22/47/onions-1397037_1280.jpg',
      
    ],
    isOrganic: true,
    isSeasonal: false,
    details: 'Our Tuscan kale is grown for optimal texture and flavor, perfect for salads, smoothies, or cooking.'
  },
  {
    id: 'Farfalle ',
    name: 'Farfalle Pasta',
    description: 'Bow-tie shaped farfalle with a firm bite, perfect for capturing sauces and adding charm to any pasta dish.',
    category: 'Pasta',
    images: [
      'https://cdn.pixabay.com/photo/2024/07/01/14/31/pasta-8865344_1280.jpg',
      'https://cdn.pixabay.com/photo/2014/12/08/09/45/pasta-560657_1280.jpg'
    ],
    isOrganic: false,
    isSeasonal: false,
    details: ''
  },
  {
    id: 'Cucumber',
    name: 'Cucumber',
    description: 'Cool, crunchy cucumbers bursting with freshness and perfect for every plate.',
    category: 'Vegetables',
    images: [
      'https://cdn.pixabay.com/photo/2018/02/04/04/43/vegetable-3129062_1280.jpg',
      'https://cdn.pixabay.com/photo/2018/11/11/19/43/cucumbers-3809535_1280.jpg'
    ],
    isOrganic: true,
    isSeasonal: false,
    details: ''
  },
  {
    id: 'Penne Pasta',
    name: 'Penne Pasta',
    description: 'Tube-shaped penne with ridged sides, ideal for holding hearty sauces and crafting the perfect pasta dish.',
    category: 'Pasta',
    images: [
      'https://cdn.pixabay.com/photo/2023/04/26/19/56/pasta-7953208_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/06/16/14/08/penne-8068095_1280.jpg'
    ],
    isOrganic: false,
    isSeasonal: false,
    details: ''
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};
