import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../images/IMG-20250827-WA0007.jpeg';
import './About.css';

const About = () => {
  const points = [
    "Over 10 years of industry experience",
    "Certified professional technicians",
    "24/7 support and maintenance",
    "High-quality genuine products",
    "Customized solutions for every client"
  ];

  return (
    <section id="about" className="section about">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title" style={{ textAlign: 'left' }}>
            About <span>Surya Enterprises</span>
          </h2>
          <p className="about-text">
            At Surya Enterprises, we are dedicated to providing top-tier security and electrical solutions. Our expertise spans across comprehensive CCTV installations, advanced access control systems, and robust electrical maintenance services.
          </p>
          <p className="about-text">
            We understand that safety and reliability are paramount for your business and home. That's why we partner with leading brands and employ certified professionals to ensure every project is executed flawlessly.
          </p>
          <ul className="about-list">
            {points.map((point, index) => (
              <li key={index}>
                <CheckCircle2 className="check-icon" size={20} />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-image-wrapper">
          <div className="about-image-placeholder">
            <img src={aboutImg} alt="About Surya Enterprises" className="about-img" />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years<br/>Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
