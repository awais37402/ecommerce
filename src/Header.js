import React, { useState } from "react";
import { ShoppingCart } from "lucide-react"; // Ensure you have lucide-react installed
import "./header.css"; // Import the CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <h1>SHOPEASE</h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <span className="close-btn" onClick={toggleMenu}>
            &times;
          </span>
          <nav className="nav-links">
          <a href="./App" className="active">Home</a>
        <a href="#product">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
          </nav>
        </div>
      )}

      {/* Navigation Menu (Desktop) */}
      <nav className="nav-links-desktop">
        <a href="./App" className="active">Home</a>
        <a href="#product">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Cart & Register */}
      <div className="cart-register">
        <ShoppingCart className="cart-icon" size={22} />
        <button className="register-btn">Register</button>
      </div>
    </header>
  );
};

export default Header;
