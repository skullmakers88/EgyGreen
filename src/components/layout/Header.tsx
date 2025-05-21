import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Link as LucideLink, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleMenu(_event: React.MouseEvent<HTMLElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <header className="absolute top-0 left-0 w-full z-50 transition-colors duration-300 bg-transparent">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="mr-2">
              <img src="/images/Logo.png" alt="" className="h-20 w-50 pt-1 mb-[14px] mt-[0.75rem]" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `${isActive ? 'nav-link-active' : ''} text-white hover:text-primary-500`
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `${isActive ? 'nav-link-active' : ''} text-white hover:text-primary-500`
              }
            >
              About Us
            </NavLink>
            <div className="relative">
              <button
                className="nav-link flex items-center hover:text-primary-500  text-white "
                onClick={() => {
      window.location.href = '/products'; // Navigate to the page
    }}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                Our Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {productsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-48 bg-white shadow-lg rounded-md mt-1 py-2 z-20"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    {['vegetables', 'fruits', 'herbs', 'organic'].map((item) => (
                      <Link
                        key={item}
                        to={`/products#${item}`}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `${isActive ? 'nav-link-active' : ''} text-white hover:text-primary-500`
              }
            >
              Gallery
            </NavLink>
            
          </nav>

          {/* Contact button */}
          <a
  href="#contact"
  className="hidden md:block btn btn-primary"
>
  Get In Touch
</a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-3">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </NavLink>
                <div className="space-y-1">
                  <button
                    className="nav-link flex items-center"
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  >
                    Our Products
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {productsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-1 border-l-2 border-primary-100 ml-2"
                      >
                        <Link 
                          to="/products#vegetables" 
                          className="block py-1 text-gray-700 hover:text-primary-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Vegetables
                        </Link>
                        <Link 
                          to="/products#fruits" 
                          className="block py-1 text-gray-700 hover:text-primary-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Fruits
                        </Link>
                        <Link 
                          to="/products#herbs" 
                          className="block py-1 text-gray-700 hover:text-primary-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Herbs
                        </Link>
                        <Link 
                          to="/products#organic" 
                          className="block py-1 text-gray-700 hover:text-primary-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Organic Line
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <NavLink 
                  to="/gallery" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </NavLink>
                <NavLink 
                  to="/news" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? 'nav-link-active' : 'nav-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </nav>

              <div className="mt-6">
                <Link 
                  to="/contact" 
                  className="w-full block text-center btn btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
