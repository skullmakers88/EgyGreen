import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, Truck, Award, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Contact from './Contact';



import { ArrowRight } from 'lucide-react';
// Components
import ProductCard from '../components/ProductCard';
// import Testimonial from '../components/Testimonial';


// Data
import { featuredProducts } from '../data/products';

const Home: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
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

  // Scroll to top on route change
  useEffect(() => {
  // Check if there's a hash in the URL
  if (location.hash) {
    const hash = location.hash.replace('#', '');
    
    const timeout = setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // slight delay to ensure the DOM has rendered

    return () => clearTimeout(timeout);
  }
}, [location]);
  return (
    <div>
      {/* New Hero Section */}
      <section id="home" className="relative pt-20 lg:pt-24 h-[115vh] overflow-hidden">

      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center transform scale-110"
        style={{ 
          backgroundImage: "url('/images/backgroundd.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
          transform: 'translateY(0px)'
        }}
      ></div>
      
    <div className="container relative z-20 flex items-center justify-center h-full">

        <div className="max-w-[72rem] text-white md:pl-[10rem] pt-20 pb-[11rem]">
          <h1 style={{ lineHeight: '3.5rem' }} className="text-4xl md:text-[60px] lg:text-[60px] font-bold mb-4 animate-fade-in lh-[3.5rem]">
            Growers and Exporters of <br />Fruits & Vegetables 
            Delivering Premium Goodness to Every Table
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Delivering excellence in fresh fruits and vegetables 
            to customers worldwide since 2003.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a href="#products" className="btn btn-primary">
              Our Products
            </a>
            <a href="#contact" className="btn btn-secondary bg-transparent text-white border-white hover:bg-white/10">
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

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-primary-800">Why Choose GRAMAX?</h2>
              <p className="max-w-3xl mx-auto text-gray-600">
                At GRAMAX, we pride ourselves on delivering the freshest, highest quality produce 
                while maintaining sustainable farming practices and supporting local communities.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-[28rem] transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary-500 rounded-t-xl"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                    <Leaf className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Premium Quality</h3>
                  <p className="text-gray-600 text-center">
                    Our produce is grown using the best agricultural practices and harvested at peak freshness for maximum flavor and nutrition. We carefully select each variety for its superior taste and nutritional profile.
                  </p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link to="/about" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-[28rem] transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-secondary-500 rounded-t-xl"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                    <Check className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Sustainable Farming</h3>
                  <p className="text-gray-600 text-center">
                    We're committed to environmentally responsible farming techniques that protect our land for future generations. Our methods focus on soil health, water conservation, and biodiversity.
                  </p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link to="/about" className="text-secondary-600 hover:text-secondary-700 font-medium flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-[28rem] transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-accent-500 rounded-t-xl"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                    <Truck className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Farm to Table</h3>
                  <p className="text-gray-600 text-center">
                    From harvest to delivery, we maintain the cold chain to ensure your produce arrives fresh and ready to enjoy. Our efficient logistics ensure same-day delivery to local customers.
                  </p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link to="/about" className="text-accent-600 hover:text-accent-700 font-medium flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 h-[28rem] transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary-500 rounded-t-xl"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                    <Award className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Quality Certified</h3>
                  <p className="text-gray-600 text-center">
                    Our farms meet the highest industry standards with certifications that guarantee quality and food safety. We maintain rigorous quality control throughout our entire operation.
                  </p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <Link to="/about" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary-800">Explore the fresh Products we proudly make & grow!</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Discover our seasonal highlights and customer favorites. All of our produce is harvested at the peak of freshness and delivered promptly to ensure exceptional quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
          viewport={{ once: false }}
          className="absolute top-0 right-0 w-1/2 h-full hidden lg:block"
        >
          <img 
  src="/images/16246.jpg" 
  alt="Delivery Vehicle" 
  className="w-full h-full object-contain"
  style={{ transform: 'scaleX(-1)' }}
/>

        </motion.div>
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}

              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-primary-800">Supply Chain</h2>
              <p className="text-gray-600 mb-4">
                The process starts when a client places an order. Quality control inspects the produce in the field to ensure it meets the client’s standards. Then, the produce is harvested and packed either on-site or at the packhouse, based on the client’s needs. After packing, it’s cooled and checked again before being loaded for delivery. This ensures you receive fresh produce directly from the field, tailored to your specifications.
              </p>
              <p className="text-gray-600 mb-6">
                Our farms span over 1,200 acres of fertile land, where we cultivate a diverse range of fruits, vegetables using both traditional wisdom and innovative farming techniques.
              </p>
              <Link to="/about" className="btn btn-outline">
                Read Our Full Story
              </Link>
            </motion.div>
            <div className="lg:hidden">
              <motion.img 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src="public/images/16246.jpg" 
                alt="Delivery Vehicle" 
                className="rounded-lg shadow-lg w-full h-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-primary-800">What Our Customers Say</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We take pride in our relationships with customers and the quality of our produce. Here's what some of our partners have to say about working with Assen Produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              quote: "The quality of Assen's produce is consistently excellent. Their tomatoes and bell peppers are the stars of our seasonal menu.",
              author: "Maria Rodriguez",
              position: "Executive Chef, Harvest Table Restaurant",
              image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }, {
              quote: "As a grocer focused on fresh, local products, I can always count on Assen Produce for reliable deliveries and exceptional quality.",
              author: "James Wilson",
              position: "Owner, Fresh Market Grocery",
              image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }, {
              quote: "Our customers specifically ask for Assen's strawberries. The flavor is incomparable to anything else on the market.",
              author: "Sarah Johnson",
              position: "Produce Buyer, Natural Foods Co-op",
              image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <Testimonial {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}

      <Contact/>
    </div>
  );
};

export default Home;
