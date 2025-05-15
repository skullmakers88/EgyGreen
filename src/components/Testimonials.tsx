import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-white reveal">What Our Clients Say</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg reveal">
            Discover why restaurants, markets, and families choose our produce for its exceptional quality and flavor.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative reveal">
          <Quote className="absolute text-primary-200 opacity-30 h-24 w-24 -top-6 -left-8" />
          
          <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 md:p-10">
            <div className="text-lg md:text-xl leading-relaxed mb-8">
              "{testimonials[activeIndex].content}"
            </div>
            
            <div className="flex items-center">
              {testimonials[activeIndex].imageUrl && (
                <img 
                  src={testimonials[activeIndex].imageUrl} 
                  alt={testimonials[activeIndex].name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
              )}
              <div>
                <h4 className="font-semibold">{testimonials[activeIndex].name}</h4>
                <p className="text-white/70 text-sm">
                  {testimonials[activeIndex].role}
                  {testimonials[activeIndex].company && `, ${testimonials[activeIndex].company}`}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-3 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;