import React from "react";
import aboutImage from "./assets/a6.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are committed to delivering the best services with high-quality
            solutions. Our team specializes in web development, graphic design,
            and innovative digital solutions to elevate your business.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
