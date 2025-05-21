import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Truck, Award, Users, Check, Link } from 'lucide-react';

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
              Since 2003, GRAMAX has been committed to growing the highest quality fruits and vegetables 
              while practicing sustainable agriculture and supporting our local community.
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
                Gramax has grown into over 1,200 acres of thriving farmland, cultivating a diverse range of fruits, vegetables, and herbs. From the early days of growing tomatoes and peppers, the focus has always been on quality, sustainability, and a deep connection to the land and community.
              </p>
              <p className="text-gray-600 mb-4">
                While the scale has expanded, the values remain unchanged. Every crop is grown with care, using innovative techniques rooted in responsible farming practices.
              </p>
              <p className="text-gray-600 mb-0">
                Today, Gramax is powered by a dedicated team committed to carrying forward a legacy of excellence. With decades of experience, we’re proud to offer produce that reflects the best of nature—nurtured by tradition and driven by progress.
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