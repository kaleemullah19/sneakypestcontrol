import React from 'react';
import './Home.css';
import cockroachesImage from '../assets/cockroaches.jpg';  // Import the cockroaches image
//import Reviews from '../components/Reviews';  // Import the Reviews component

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Sneaky Pest Control</h1>
      <img src={cockroachesImage} alt="Cockroaches" className="welcome-image" /> {/* Update the image source */}
      <p>Your trusted partner in pest management.</p>
      <section className="services-overview">
        <h2>Our Services</h2>
        <p>We offer a variety of pest control services to keep your home and business pest-free.</p>
        <ul>
          <li>Termite Control</li>
          <li>Rodent Control</li>
          <li>Insect Control</li>
          <li>Wildlife Control</li>
        </ul>
      </section>
      {/* <Reviews /> */}  {/* Include Reviews component if needed */}
    </div>
  );
};

export default Home;
