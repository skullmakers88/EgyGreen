import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Truck, Award, Users, Check, Link, Microscope, Sprout } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            opacity: 0.3
          }}
        />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="mb-[4rem] mt-[3rem]">Our Story</h1>
            <p className="text-xl mb-0 text-gray-200">
            GRAMAX is driven by a team of experts with over 20 years of experience in identifying, partnering with, and supporting high-performing agricultural suppliers—committed to delivering the highest quality fruits, vegetables, and plant-based products through sustainable practices and strong community values.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-primary-800">Our Roots Run Deep</h2>
              <p className="text-gray-600 mb-4">
                Gramax partners with trusted suppliers who collectively farm over 1,200 acres of fertile land, cultivating a diverse range of fruits, vegetables, legumes, herbs, and even producing pasta. From the early days of sourcing tomatoes and peppers, our focus has always been on quality, sustainability, and a deep connection to land and community.
              </p>
              <p className="text-gray-600 mb-4">
                While the scale of our supplier network has expanded, the values we uphold remain unchanged. Every product is grown or made with care using innovative and responsible techniques—while Gramax ensures quality and consistency at every step.
              </p>
              <p className="text-gray-600 mb-0">
                Today, Gramax is powered by a dedicated team committed to carrying forward a legacy of excellence. With decades of experience, we’re proud to deliver products that reflect the best of nature—nurtured by our partners and quality-assured by Gramax.
              </p>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg" 
                alt="GrAMAX" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white relative overflow-hidden" style={{position: 'relative'}}>
        {/* Video Background for Why Choose GRAMAX? */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
            src="/videos/84624-585553977_medium.mp4"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-primary-100">The Values We Uphold</h2>
              <p className="max-w-3xl mx-auto text-gray-100">
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
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-8 h-[28rem] transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary-500 rounded-t-xl"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                    <Sprout className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-primary-100">Rooted in Relationships</h3>
                  <p className="text-gray-100 text-center">
                  We believe the best produce starts with strong partnerships. <br />
                  Gramax invests in long-term relationships with trusted growers and producers who share our commitment to integrity, 
                  reliability, and excellence.
                  </p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  
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
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-8 h-[28rem] transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-secondary-500 rounded-t-xl"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                    <Microscope className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-primary-100">Expertly Screened</h3>
                  <p className="text-gray-100 text-center">
                  Our team of specialists brings over 20 years of experience in selecting suppliers and evaluating quality. Every product we handle passes through a rigorous review process to ensure it meets our high standards before it reaches you.
                  </p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  
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
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-8 h-[28rem] transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-accent-500 rounded-t-xl"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                    <Truck className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-primary-100">Efficiency in Motion</h3>
                  <p className="text-gray-100 text-center">
                  From field to final destination, we streamline every step of the process. Our logistics systems are built for speed, consistency, and cold-chain precision—so freshness is never compromised
                  </p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  
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
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-8 h-[28rem] transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary-500 rounded-t-xl"></div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                    <Award className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-primary-100">Grown with Purpose</h3>
                  <p className="text-gray-100 text-center">
                  We champion sustainable sourcing by working with partners who prioritize responsible farming. Together, we support practices that protect ecosystems, conserve water, and minimize environmental impact—because good food should do good, too.
                  </p>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;