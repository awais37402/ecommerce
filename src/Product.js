import React, { useState } from 'react';
import './product.css'; // Import your styles

// Import product images
import laptop1 from './assets/f1.jpg';
import laptop2 from './assets/f2.jpg';
import laptop3 from './assets/f3.jpg';

const products = [
  {
    id: 1,
    name: 'Cartoon Astronaut T-Shirts',
    price: '$10',
    image: laptop1,
    details: 'This is a high-quality cartoon astronaut-themed T-shirt.',
  },
  {
    id: 2,
    name: 'Cartoon Astronaut T-Shirts',
    price: '$12',
    image: laptop2,
    details: 'Perfect for space lovers, this T-shirt is comfortable and stylish.',
  },
  {
    id: 3,
    name: 'Cartoon Astronaut T-Shirts',
    price: '$15',
    image: laptop3,
    details: 'Explore the universe with our premium astronaut T-shirt collection.',
  },
];

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle click on product
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div id='product' className="products-section">
      <h2 className="section-title">Our Product Collection</h2>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id} onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="see-more-container">
        <button className="see-more-btn" onClick={() => console.log('See More clicked!')}>
          See More
        </button>
      </div>

      {/* Modal to display product details */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <h3 className="modal-name">{selectedProduct.name}</h3>
            <p className="modal-price">{selectedProduct.price}</p>
            <p className="modal-details">{selectedProduct.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
