import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

const ProductDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container py-20">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <button 
            onClick={() => navigate('/products')}
            className="btn btn-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container py-20">
        <button 
          onClick={() => navigate('/products')}
          className="btn btn-secondary mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name}
                className="w-full h-auto"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-primary-600 w-4' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="text-sm text-primary-600 font-medium mb-2 block">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Product Features</h2>
              <ul className="space-y-3">
                {product.isOrganic && (
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Certified Organic
                  </li>
                )}
                {product.isSeasonalPick && (
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Currently in Season
                  </li>
                )}
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Premium Quality
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Carefully Selected
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Interested in this product?</h2>
              <p className="text-gray-600 mb-4">
                Contact us to learn more about pricing, availability, and bulk orders.
              </p>
              <a href="/#contact" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;