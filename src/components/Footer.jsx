import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/logo.png" alt="Surya Enterprises Logo" className="logo-img" />
              <span className="logo-text">Surya Enterprises</span>
            </a>
            <p className="footer-desc">
              Your trusted partner for all CCTV, security, and electrical solutions. Securing your world, illuminating your future.
            </p>
            <div className="social-links">
              {/* <a href="#" target='blank' aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" target='blank' aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a> */}
              <a href="https://www.instagram.com/avinash.jain03?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank' aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://wa.me/+919049596936" target='blank' aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#clients">Target Clients</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li>CCTV Cameras</li>
              <li>Video Door Phones</li>
              <li>Access Control</li>
              <li>Electrical Maintenance</li>
              <li>Inverter & UPS</li>
              <li>LED Lights</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Surya Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
