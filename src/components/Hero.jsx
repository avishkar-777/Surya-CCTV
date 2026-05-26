import React from 'react';
import { ShieldCheck, PhoneCall } from 'lucide-react';
import heroBg from '../images/IMG-20250819-WA0013.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-highlight">Surya Enterprises</span>
            <br />
            Securing Your World, Illuminating Your Future
          </h1>
          <p className="hero-subtitle">
            Premier solutions for CCTV sales, installation, access control, and complete electrical maintenance for your peace of mind.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary hero-btn">
              <ShieldCheck size={20} />
              Our Services
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn">
              <PhoneCall size={20} />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
