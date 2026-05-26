import React from 'react';
import { Camera, Phone, KeySquare, Zap, BatteryCharging, Lightbulb } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Camera size={32} />,
      title: "CCTV Camera Solutions",
      description: "High-definition surveillance systems for complete property monitoring and security."
    },
    {
      id: 2,
      icon: <Phone size={32} />,
      title: "Video Door Phones",
      description: "Advanced intercom systems allowing you to see and communicate with visitors securely."
    },
    {
      id: 3,
      icon: <KeySquare size={32} />,
      title: "Access Control",
      description: "Biometric and card-based systems to restrict and monitor entry points effectively."
    },
    {
      id: 4,
      icon: <Zap size={32} />,
      title: "Electrical Maintenance",
      description: "Comprehensive electrical repair and maintenance services by certified professionals."
    },
    {
      id: 5,
      icon: <BatteryCharging size={32} />,
      title: "Inverter & UPS Systems",
      description: "Reliable power backup solutions to keep your essential systems running continuously."
    },
    {
      id: 6,
      icon: <Lightbulb size={32} />,
      title: "LED Light Sales",
      description: "Energy-efficient and durable LED lighting options for all commercial and residential needs."
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">
          Our <span>Services</span>
        </h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
