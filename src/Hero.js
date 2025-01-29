import React from "react";
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left Content */}
        <div className="text-content">
          <p className="tagline">Special Offer ✨</p>
          <h1 className="headline">Trendy Collection</h1>
          <p className="description">
            Select the best trendy items to enhance your fashion style.
          </p>
          <button className="cta-button">Start Shopping</button>
          <div className="stats">
            <div>
              <h3>100K+</h3>
              <p>Happy Customers</p>
            </div>
            <div>
              <h3>1.6M</h3>
              <p>Website Traffic</p>
            </div>
          </div>
        </div>

        {/* Centered Image */}
        <div className="image-content">
          <img
            src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8="
            alt="Woman shopping"
            className="hero-image"
          />
        </div>

        {/* Offer Section on the Right */}
        <div className="offer-content">
          <h3>14K+</h3>
          <p>Worldwide Products Sold</p>
          <h2>Special Offer</h2>
          <p className="subheadline">Fashion Sale</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
