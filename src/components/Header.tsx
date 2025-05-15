import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed w-full z-50 sticky-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src='src\images\logo.png' alt="Logo" className="h-20 w-22" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-medium text-gray-900 hover:text-primary-600 transition-colors">Home</a>
            <a href="/#about" className="font-medium text-gray-900 hover:text-primary-600 transition-colors">About</a>
            <a href="/products" className="font-medium text-gray-900 hover:text-primary-600 transition-colors">Products</a>
            <a href="/quality" className="font-medium text-gray-900 hover:text-primary-600 transition-colors">Quality</a>
          
            <a href="/#contact" className="font-medium text-gray-900 hover:text-primary-600 transition-colors">Contact</a>
            <a href="/#contact" className="btn btn-primary">Get In Touch</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-900 hover:text-primary-600 focus:outline-none">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-3">
            <nav className="flex flex-col space-y-3">
              <a href="/" className="font-medium text-gray-900 hover:text-primary-600 py-2 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="/#about" className="font-medium text-gray-900 hover:text-primary-600 py-2 transition-colors" onClick={toggleMenu}>About</a>
              <a href="/products" className="font-medium text-gray-900 hover:text-primary-600 py-2 transition-colors" onClick={toggleMenu}>Products</a>
              <a href="/quality" className="font-medium text-gray-900 hover:text-primary-600 py-2 transition-colors" onClick={toggleMenu}>Quality</a>
              <div className="py-2">
                <p className="font-medium text-gray-900 mb-2">Seasons</p>
                <div className="pl-4 flex flex-col space-y-2">
                  <a href="/#spring" className="text-sm text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Spring Harvest</a>
                  <a href="/#summer" className="text-sm text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Summer Picks</a>
                  <a href="/#fall" className="text-sm text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Fall Favorites</a>
                  <a href="/#winter" className="text-sm text-gray-700 hover:text-primary-600" onClick={toggleMenu}>Winter Selection</a>
                </div>
              </div>
              <a href="/#contact" className="font-medium text-gray-900 hover:text-primary-600 py-2 transition-colors" onClick={toggleMenu}>Contact</a>
              <a href="/#contact" className="btn btn-primary mt-2" onClick={toggleMenu}>Get In Touch</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
