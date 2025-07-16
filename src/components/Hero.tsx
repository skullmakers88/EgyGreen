import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.scrollY;
        backgroundRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative pt-20 lg:pt-24 h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black/80 z-10"></div>
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center transform scale-110"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform'
        }}
      ></div>
      
      <div className="container relative z-20 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            PREMIUM QUALITY <br />
            FRESH PRODUCE
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Delivering excellence in fresh fruits and vegetables 
            to customers worldwide since 2003.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a href="#products" className="btn btn-primary">
              Our Products
            </a>
            <a href="#footer" className="btn btn-secondary bg-transparent text-white border-white hover:bg-white/10">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <div className="flex items-center mt-12 space-x-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">20+</span>
              <span className="text-sm text-gray-400">Years Experience</span>
            </div>
            <div className="h-10 w-px bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">50+</span>
              <span className="text-sm text-gray-400">Products</span>
            </div>
            <div className="h-10 w-px bg-gray-700"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">30+</span>
              <span className="text-sm text-gray-400">Countries</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default Hero;