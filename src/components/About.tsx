import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading reveal">About Egygreen</h2>
          <p className="section-subheading reveal">
            Since 2003, we've been a pioneer in exporting premium Egyptian produce worldwide,
            committed to quality, freshness, and customer satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl reveal">
              <img 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg" 
                alt="Farmer inspecting crops" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block reveal" style={{animationDelay: '0.3s'}}>
              <img 
                src="https://images.pexels.com/photos/8363735/pexels-photo-8363735.jpeg" 
                alt="Organic certification" 
                className="w-32 h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg reveal">
            <h3 className="text-2xl font-bold text-gray-900 reveal">Our History</h3>
            <p className="text-gray-600 reveal" style={{animationDelay: '0.2s'}}>
              Egygreen started in 2003 based in Cairo, Egypt, with a state-of-the-art pack-house located in Sadat city. 
              We've grown to become one of the pioneers in exporting fresh fruits and vegetables across Europe, Africa, 
              Asia, and Arab countries. At Egygreen, we believe in providing our customers with the finest selection of 
              regional fresh fruits and vegetables, because our customers insist on the best and we ensure their 
              requirements are met.
            </p>
          </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg reveal">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We work hard to provide a day-fresh range of fruits and vegetables to our clients. We continuously 
              enhance every project through applying new technologies to our products and services to satisfy our 
              customers' needs. Our commitment to freshness and quality drives everything we do.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg reveal" style={{animationDelay: '0.2s'}}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the first strategic choice for our customers in fresh fruits and vegetables. We strive to 
              maintain our position as a leading exporter of premium Egyptian produce, setting industry standards 
              for quality and service.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 reveal">Why Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start reveal" style={{animationDelay: '0.4s'}}>
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-primary-600" />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-gray-900">Global Reach</h4>
                <p className="text-gray-600">
                  Exporting premium produce across Europe, Africa, Asia, and Arab countries.
                </p>
              </div>
            </div>
            
            <div className="flex items-start reveal" style={{animationDelay: '0.5s'}}>
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-primary-600" />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-gray-900">Day-Fresh Quality</h4>
                <p className="text-gray-600">
                  Ensuring the freshest produce through efficient harvesting and delivery.
                </p>
              </div>
            </div>
            
            <div className="flex items-start reveal" style={{animationDelay: '0.6s'}}>
              <div className="flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-primary-600" />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-gray-900">Advanced Technology</h4>
                <p className="text-gray-600">
                  Implementing cutting-edge solutions for product quality and service excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;