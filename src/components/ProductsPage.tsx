import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const sectionRef = useRef<HTMLElement>(null);
  
  const categories = ['All','Fruits' ,'Vegetables', 'Legumes', 'Pasta'];
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory]);
  
  return (
    
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our selection of premium Egyptian vegetables and legumes, 
              carefully sourced and delivered fresh to your table.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;