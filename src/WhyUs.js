import React, { useState } from 'react';
import './WhyUs.css';

const WhyUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const items = [
    {
      title: "Fast Delivery",
      description: "Experience the convenience of our quick and reliable delivery service, ensuring your products arrive on time, every time."
    },
    {
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders, making your shopping experience even more affordable and enjoyable."
    },
    {
      title: "Best Quality",
      description: "Shop with confidence knowing that our products are of the highest quality, carefully selected to meet your needs."
    }
  ];

  return (
    <section id="why-us">
      <h2>Why Shop With Us</h2>
      <div className="why-us-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`why-us-item ${hoveredIndex === index ? 'highlight' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="why-us-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
