import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import ProductsPage from './components/ProductsPage';
import ProductDetails from './components/ProductDetails';
import SeasonalSection from './components/SeasonalSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Quality from './components/Quality';
import Footer from './components/Footer';
import Admin from './components/Admin';
import { setupScrollAnimation, setupHeaderScroll } from './utils/animation';
import { initializeProducts } from './data/products';
import SeasonCalendar from './components/calender';

function App() {
  React.useEffect(() => {
    initializeProducts(); // Load from localStorage
    setupScrollAnimation();
    setupHeaderScroll();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Hero />
              <About />
              <Products />
              <SeasonCalendar />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        
        <Route path="/quality" element={
          <div className="min-h-screen bg-white">
            <Header />
            <Quality />
            <Footer />
          </div>
        } />
        
        <Route path="/products" element={
          <div className="min-h-screen bg-white">
            <Header />
            <ProductsPage />
            <Footer />
          </div>
        } />
        
        <Route path="/products/:id" element={
          <div className="min-h-screen bg-white">
            <Header />
            <ProductDetails />
            <Footer />
          </div>
        } />

        <Route path="/admin" element={
          <div className="min-h-screen bg-white">
            <Header />
            <Admin />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;