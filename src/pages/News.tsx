import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { newsItems } from '../data/news';

const News: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1684114/pexels-photo-1684114.jpeg')",
            opacity: 0.3
          }}
        />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="mb-4">News & Updates</h1>
            <p className="text-xl mb-0 text-gray-200">
              Stay informed about our latest initiatives, seasonal updates, and agricultural insights.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Latest News</h2>
              
              <div className="space-y-8">
                {newsItems.map((newsItem, index) => (
                  <motion.article 
                    key={newsItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
                  >
                    <div className="md:w-1/3">
                      <img 
                        src={newsItem.image} 
                        alt={newsItem.title} 
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        <Link to={`/news/${newsItem.id}`} className="text-gray-900 hover:text-primary-600 transition-colors">
                          {newsItem.title}
                        </Link>
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{newsItem.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{newsItem.author}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {newsItem.excerpt}
                      </p>
                      <Link 
                        to={`/news/${newsItem.id}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                      >
                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-6 sticky top-32">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                      Sustainability (1)
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                      Certification (1)
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                      Seasonal (1)
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                      Community (1)
                    </Link>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter to get the latest updates on our products, special offers, and farming insights.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                  <button type="submit" className="w-full btn btn-primary">
                    Subscribe
                  </button>
                </form>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-primary-100 p-2 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12.061C22 6.505 17.523 2 12.001 2 6.477 2 2 6.505 2 12.061c0 4.993 3.656 9.132 8.437 9.879v-6.99H7.9v-2.89h2.538V9.86c0-2.523 1.495-3.915 3.78-3.915 1.096 0 2.24.197 2.24.197v2.477h-1.264c-1.24 0-1.628.776-1.628 1.572v1.89h2.771l-.443 2.89h-2.328V21.94C18.344 21.192 22 17.053 22 12.061z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-primary-100 p-2 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.001 8.684c-1.84 0-3.324 1.49-3.324 3.333s1.484 3.334 3.324 3.334c1.84 0 3.324-1.49 3.324-3.334s-1.485-3.333-3.324-3.333zm6.643-1.444c-.078-1.607-.433-3.034-1.58-4.181C15.917 1.913 14.491 1.56 12.887 1.48c-1.648-.093-6.59-.093-8.238 0C3.045 1.56 1.618 1.91.475 3.057c-1.147 1.148-1.5 2.574-1.58 4.182-.093 1.65-.093 6.601 0 8.251.078 1.607.433 3.032 1.58 4.18C1.618 20.817 3.044 21.17 4.65 21.25c1.648.092 6.59.092 8.238 0 1.604-.08 3.03-.433 4.177-1.58 1.147-1.148 1.5-2.573 1.58-4.18.093-1.65.093-6.595 0-8.25zm-2.143 10.02c-.172 1.085-.537 2.04-1.551 3.056-1.011 1.01-1.966 1.373-3.05 1.547-1.527.192-5.953.189-7.485 0-1.082-.176-2.04-.537-3.051-1.553-1.011-1.011-1.376-1.973-1.55-3.057-.19-1.53-.19-5.962 0-7.492.173-1.084.537-2.04 1.55-3.057 1.012-1.01 1.97-1.372 3.05-1.547 1.527-.19 5.954-.189 7.486 0 1.083.176 2.04.537 3.05 1.553 1.012 1.011 1.376 1.974 1.55 3.057.19 1.53.19 5.962 0 7.493z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-primary-100 p-2 rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.429 19.667c7.714 0 11.932-6.392 11.932-11.932 0-.182 0-.363-.012-.543a8.522 8.522 0 0 0 2.09-2.173 8.394 8.394 0 0 1-2.403.658 4.195 4.195 0 0 0 1.84-2.314 8.44 8.44 0 0 1-2.656 1.015 4.18 4.18 0 0 0-7.23 2.859c0 .328.032.647.108.952-3.474-.173-6.555-1.838-8.625-4.371a4.175 4.175 0 0 0 1.29 5.584 4.113 4.113 0 0 1-1.897-.522v.052a4.186 4.186 0 0 0 3.356 4.102 4.21 4.21 0 0 1-1.89.07 4.185 4.185 0 0 0 3.908 2.906 8.394 8.394 0 0 1-5.192 1.79c-.336 0-.672-.02-1.001-.058a11.814 11.814 0 0 0 6.42 1.884"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-200 hover:bg-primary-100 p-2 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;