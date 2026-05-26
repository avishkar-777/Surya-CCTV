import React from 'react';
import './Gallery.css';

import img1 from '../images/IMG-20250819-WA0013.jpeg';
import img2 from '../images/IMG-20250827-WA0007.jpeg';
import img3 from '../images/IMG-20250827-WA0010.jpeg';
import img4 from '../images/IMG-20250827-WA0011.jpeg';
import img5 from '../images/IMG-20250827-WA0014.jpeg';
import img6 from '../images/IMG-20250901-WA0016.jpeg';
import img7 from '../images/IMG-20250901-WA0017.jpeg';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">
          Our <span>Gallery</span>
        </h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
