import React from 'react';
import { Leaf } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
        {product.isOrganic && (
          <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
            <Leaf className="h-3 w-3 mr-1" />
            Organic
          </div>
        )}
        {product.isSeasonalPick && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            In Season
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <span className="text-xs text-primary-600 font-medium mb-1">{product.category}</span>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <a 
            href={`/products/${product.id}`}
            className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;