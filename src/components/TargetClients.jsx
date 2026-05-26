import React from 'react';
import { Factory, Store, GraduationCap, Building2 } from 'lucide-react';
import './TargetClients.css';

const TargetClients = () => {
  const clients = [
    {
      id: 1,
      icon: <Factory size={40} />,
      title: "Industrial",
      description: "Robust security systems tailored for manufacturing and industrial facilities."
    },
    {
      id: 2,
      icon: <Store size={40} />,
      title: "Commercial",
      description: "Comprehensive surveillance and access control for retail and offices."
    },
    {
      id: 3,
      icon: <GraduationCap size={40} />,
      title: "Schools & Colleges",
      description: "Ensuring student safety with reliable campus-wide monitoring solutions."
    },
    {
      id: 4,
      icon: <Building2 size={40} />,
      title: "Hospitals & Societies",
      description: "Advanced safety integrations for healthcare facilities and residential complexes."
    }
  ];

  return (
    <section id="clients" className="section clients">
      <div className="container">
        <h2 className="section-title">
          Who We <span>Serve</span>
        </h2>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <div className="client-icon">{client.icon}</div>
              <h3 className="client-title">{client.title}</h3>
              <p className="client-desc">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetClients;
