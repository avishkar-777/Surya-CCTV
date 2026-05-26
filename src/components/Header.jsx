import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          <img src="/logo.png" alt="Surya Enterprises Logo" className="logo-img" />
          <span className="logo-text">Surya Enterprises</span>
        </a>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
