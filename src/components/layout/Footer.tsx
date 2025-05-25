import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="mr-2">
                <img src="/images/Logo.png" alt="" className="h-20 w-50 pt-1" />
              </div>
              
            </Link>
            <p className="text-gray-400 mb-4">
              Providing premium quality fresh produce since 2003. Our fruits and vegetables are grown with care and harvested at the peak of freshness.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products#vegetables" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link to="/products#fruits" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Fruits
                </Link>
              </li>
              <li>
                <Link to="/products#herbs" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Legumes
                </Link>
              </li>
              <li>
                <Link to="/products#organic" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Organic Produce
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-primary-400" size={18} />
                <span className="text-gray-400">
                  El BANAFSEG 5<br />
                  ZAKRIA AHMED ST<br />
                  CAIRO, EGYPT
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-primary-400" size={18} />
                <a href="tel:+201144145670" className="text-gray-400 hover:text-white transition-colors duration-200">
                  (+20) 1144145670
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-primary-400" size={18} />
                <a href="mailto:Omar.ghanem@gramaxexp.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Omar.ghanem@gramaxexp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GRAMAX. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
