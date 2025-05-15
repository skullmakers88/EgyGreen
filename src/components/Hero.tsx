import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 lg:pt-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('src/images/backgroundd.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container relative z-20 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Farm Fresh Produce <br />
            From Nature to Your Table
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Premium fruits and vegetables harvested at peak freshness,
            delivered with care for exceptional flavor and nutrition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a href="#products" className="btn btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Explore Our Products
            </a>
            <a href="#contact" className="btn btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <div className="flex items-center mt-12 space-x-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">100%</span>
              <span className="text-sm text-white/80">Organic</span>
            </div>
            <div className="h-10 w-px bg-white/30"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">18+</span>
              <span className="text-sm text-white/80">Products</span>
            </div>
            <div className="h-10 w-px bg-white/30"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">22+</span>
              <span className="text-sm text-white/80">Years</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;