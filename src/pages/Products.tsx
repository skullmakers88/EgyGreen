import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { allProducts, getProductsByCategory } from '../data/products';
import { Product } from '../types';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterOrganic, setFilterOrganic] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Apply filters
    let result = [...allProducts];
    
    // Category filter
    if (filterCategory !== 'all') {
      result = result.filter(product => 
        product.category.toLowerCase() === filterCategory.toLowerCase()
      );
    }
    
    // Organic filter
    if (filterOrganic) {
      result = result.filter(product => product.isOrganic);
    }
    
    
    
    // Search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  }, [searchTerm, filterCategory, filterOrganic]);

  useEffect(() => {
    // Check if hash exists in URL and scroll to that section
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(hash);
      }
    }
    
    // Set up intersection observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const vegetables = getProductsByCategory('Vegetables');
  const fruits = getProductsByCategory('Fruits');
  const legumes = getProductsByCategory('Legumes');
  const pasta = getProductsByCategory('Pasta');

  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/68170/paprika-green-red-vegetables-68170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            opacity: 0.4
          }}
        />
        <div className="container-custom relative">
          <div className="max-w-3xl">
            <h1 className="mb-[4rem] mt-[3rem]">Our Premium Products</h1>
            <p className="text-xl mb-0 text-gray-200">
              Discover our variety of farm-fresh produce, grown with care and harvested at peak freshness for exceptional flavor and nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm sticky top-[0rem] z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterCategory === 'all' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setFilterCategory('all')}
              >
                All
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterCategory === 'vegetables' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setFilterCategory('vegetables')}
              >
                Vegetables
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterCategory === 'fruits' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setFilterCategory('fruits')}
              >
                Fruits
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filterCategory === 'legumes' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setFilterCategory('legumes')}
              >
                Legumes
              </button>
              <button
  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
    filterCategory === 'Pasta' 
      ? 'bg-primary-600 text-white' 
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
  }`}
  onClick={() => setFilterCategory('Pasta')}
>
  Pasta
</button>

            </div>
            
            {/* Special Filters */}
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-primary-600 transition duration-150 ease-in-out"
                  checked={filterOrganic}
                  onChange={() => setFilterOrganic(!filterOrganic)}
                />
                <span className="ml-2 text-sm text-gray-700">Organic</span>
              </label>
      
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="bg-gray-50 py-4 border-b sticky top-[6rem] z-10">
        <div className="container-custom">
          <div className="flex overflow-x-auto space-x-6 pb-2 scrollbar-hide">
            <button 
              className={`whitespace-nowrap px-3 py-2 text-sm font-medium ${
                activeSection === 'vegetables' 
                  ? 'text-primary-700 border-b-2 border-primary-500' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => scrollToSection('vegetables')}
            >
              Vegetables
            </button>
            <button 
              className={`whitespace-nowrap px-3 py-2 text-sm font-medium ${
                activeSection === 'fruits' 
                  ? 'text-primary-700 border-b-2 border-primary-500' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => scrollToSection('fruits')}
            >
              Fruits
            </button>
            <button 
              className={`whitespace-nowrap px-3 py-2 text-sm font-medium ${
                activeSection === 'legumes' 
                  ? 'text-primary-700 border-b-2 border-primary-500' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => scrollToSection('legumes')}
            >
              Legumes
            </button>
            <button 
  className={`whitespace-nowrap px-3 py-2 text-sm font-medium ${
    activeSection === 'pasta' 
      ? 'text-primary-700 border-b-2 border-primary-500' 
      : 'text-gray-600 hover:text-primary-600'
  }`}
  onClick={() => scrollToSection('pasta')}
>
  Pasta
</button>

            <button 
              className={`whitespace-nowrap px-3 py-2 text-sm font-medium ${
                activeSection === 'organic' 
                  ? 'text-primary-700 border-b-2 border-primary-500' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => scrollToSection('organic')}
            >
              Organic Line
            </button>

          </div>
        </div>
      </div>

      {/* Filtered Products Results */}
      {(searchTerm || filterCategory !== 'all' || filterOrganic) && (
        <section className="section pt-8 pb-4">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold mb-6">Search Results</h2>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
                <button 
                  className="mt-4 btn btn-outline"
                  onClick={() => {
                    setSearchTerm('');
                    setFilterCategory('all');
                    setFilterOrganic(false);
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* If no filters are applied, show categorized products */}
      {!searchTerm && filterCategory === 'all' && !filterOrganic && (
        <>
          {/* Vegetables Section */}
          <section id="vegetables" className="section pt-12 pb-8">
            <div className="container-custom">
              <h2 className="text-3xl font-semibold mb-6">Vegetables</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Our vegetables are grown using sustainable farming practices and harvested at the peak of freshness to ensure optimal flavor and nutritional value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {vegetables.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Fruits Section */}
          <section id="fruits" className="section py-8 bg-gray-50">
            <div className="container-custom">
              <h2 className="text-3xl font-semibold mb-6">Fruits</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Sweet, juicy, and bursting with flavor, our fruits are nature's perfect snack. We grow a variety of seasonal fruits using methods that emphasize taste and quality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {fruits.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Herbs Section */}
          <section id="legumes" className="section py-8">
            <div className="container-custom">
              <h2 className="text-3xl font-semibold mb-6">Legumes</h2>
              <p className="text-gray-600 mb-8 max-w-3xl">
                Add depth and complexity to your dishes with our fresh,legumes. made with care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {legumes.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Pasta Section */}
<section id="pasta" className="section py-8 bg-white">
  <div className="container-custom">
    <h2 className="text-3xl font-semibold mb-6">Pasta</h2>
    <p className="text-gray-600 mb-8 max-w-3xl">
      Our artisanal pasta is crafted with the finest grains and traditional methods for a rich taste and perfect texture in every bite.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {pasta.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  </div>
</section>


          {/* Organic Section */}
          <section id="organic" className="section py-8 bg-gray-50">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-semibold mb-4">Our Organic Line</h2>
                  <p className="text-gray-600 mb-4">
                    Our certified organic produce is grown without synthetic pesticides or fertilizers, using methods that protect the environment and promote biodiversity. We're committed to organic farming because we believe it produces healthier food and a healthier planet.
                  </p>
                  <p className="text-gray-600 mb-4">
                    All of our organic products meet the strict standards set by the USDA National Organic Program and are certified by Oregon Tilth, a leading certifier in sustainable agriculture.
                  </p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-primary-50 rounded-full">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2C5F2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    </div>
                    <div className="p-2 bg-primary-50 rounded-full">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2C5F2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                      </svg>
                    </div>
                  </div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setFilterOrganic(true)}
                  >
                    View All Organic Products
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg" 
                    alt="Organic farming at Assen Produce" 
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

        </>
      )}
    </div>
  );
};

export default Products;
