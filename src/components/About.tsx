import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const sectionTop = backgroundRef.current.parentElement?.offsetTop || 0;
        const scrolled = window.scrollY - sectionTop;
        const translate = Math.max(0, scrolled * 0.5);
        backgroundRef.current.style.transform = `translateY(${translate}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section relative overflow-hidden h-[100vh] lg:h-[80vh]">
      {/* Animated background */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&fit=crop&w=1200&q=80')",
          willChange: 'transform',
        }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-primary-800">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1985, Assen Produce began as a small family farm with a passion for growing the finest fruits and vegetables. Today, we've grown into one of the region's premier produce suppliers, but our commitment to quality and sustainability remains unchanged.
            </p>
            <p className="text-gray-600 mb-6">
              Our farms span over 1,200 acres of fertile land, where we cultivate a diverse range of fruits, vegetables, and herbs using both traditional wisdom and innovative farming techniques.
            </p>
            <Link to="/about" className="btn btn-outline">
              Read Our Full Story
            </Link>
          </motion.div>
          <div className="lg:hidden">
            <img
              src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
              alt="Assen Produce Farm"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
