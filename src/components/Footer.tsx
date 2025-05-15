import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [clicks, setClicks] = useState(0);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    
    if (newClicks === 5) {
      navigate('/admin');
      setClicks(0);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/src/images/logo.png"
                onClick={handleLogoClick}
                alt="Logo"
                className="h-20 w-22"
              
              />
            </div>
            <p className="text-gray-400 mb-6">
              Premium fruits and vegetables harvested at peak freshness, delivered with care for exceptional flavor and nutrition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#seasonal" className="text-gray-400 hover:text-white transition-colors">Seasonal Picks</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Organic Fruits</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Fresh Vegetables</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Premium Berries</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Seasonal Specials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Wholesale</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Harvest Lane</p>
              <p className="mb-2">Farmington, CA 95464</p>
              <p className="mb-4">United States</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Email: info@freshharvest.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FreshHarvest. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors mb-2 md:mb-0">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors mb-2 md:mb-0">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors mb-2 md:mb-0">Sitemap</a>
            </div>
          </div>
          <div className="text-center mt-6 text-xs text-gray-600">
            <p className="flex items-center justify-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> for fresh produce lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;