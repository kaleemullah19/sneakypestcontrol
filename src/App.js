import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}


const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>HomePro Pest Control</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <h2>Welcome to HomePro Pest Control</h2>
        <p>We provide professional pest control services to keep your home safe and clean.</p>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service">
          <h3>Residential Pest Control</h3>
          <p>Effective solutions to protect your home from pests.</p>
        </div>
        <div className="service">
          <h3>Commercial Pest Control</h3>
          <p>Comprehensive pest management for businesses.</p>
        </div>
        <div className="service">
          <h3>Rodent Control</h3>
          <p>Safe and humane rodent control services.</p>
        </div>
        <div className="service">
          <h3>Insect Control</h3>
          <p>Eliminate insects and prevent infestations.</p>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Us</h2>
        <p>HomePro Pest Control is dedicated to providing top-notch pest control services with a focus on customer satisfaction.</p>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Get in touch with us for a free consultation and estimate.</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 HomePro Pest Control. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default App;
