import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Product from './Product'; // Import the Product.js
import './styles.css';
import './App.css';

import { FaArrowUp } from 'react-icons/fa'; // Scroll to top icon

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Show the scroll button when the user scrolls down
  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Display products here */}
      <Product /> {/* This will show the product list */}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
