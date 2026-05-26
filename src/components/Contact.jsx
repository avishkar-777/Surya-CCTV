import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            <p className="contact-desc">
              Ready to secure your premises or need expert electrical services? Contact us today for a consultation and customized quote.
            </p>

            <div className="info-items">
              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <h4>Our Location</h4>
                  <p>Sinhagad Road Manikbag Pune - 411051</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 90495 96936</p>
                  <p>+91 777 4 963 662</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <div>
                  <h4>Email Us</h4>
                  <p>info@suryaenterprises.com</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" size={24} />
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service">
                  <option value="cctv">CCTV Installation</option>
                  <option value="access">Access Control</option>
                  <option value="electrical">Electrical Maintenance</option>
                  <option value="inverter">Inverter / UPS</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
