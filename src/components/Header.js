import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.webp'; // Import your logo

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Sneaky Pest Control Logo" className="logo" />
        <h1 className="title">Sneaky Pest Control</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
