import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { getSeasonalProducts } from '../data/products';

const SeasonalSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const seasonalProducts = getSeasonalProducts();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.reveal');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  return (
    <section id="seasonal" className="py-20 bg-earth-50" ref={sectionRef}>
      <div className="container">
        <div className="relative mb-16">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <span className="inline-block px-4 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
              This Season's Best
            </span>
          </div>
          
          <div className="text-center">
            <h2 className="section-heading reveal">
              Seasonal Favorites
            </h2>
            <p className="section-subheading reveal">
              Our seasonal picks, harvested at the peak of their flavor and nutritional value.
            </p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {seasonalProducts.map((product, index) => (
            <div key={product.id} className="reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 bg-white rounded-lg shadow-md p-8 text-center reveal">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Looking for Wholesale Options?
          </h3>
          <p className="text-gray-600 mb-6">
            We offer special pricing and delivery options for restaurants, markets, and other businesses.
            Contact our wholesale team to learn more.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Wholesale
          </a>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;