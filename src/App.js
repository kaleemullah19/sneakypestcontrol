import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div key="reviews-map-container">
        <Reviews key="reviews-component" /> {/* Add Reviews component */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736265.0789997042!2d-80.47467434232945!3d43.8758167933749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db9d9f822e85bd%3A0x37520494280c4b3!2sSneaky%20Pest%20Control!5e0!3m2!1sen!2sca!4v1719858093102!5m2!1sen!2sca"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          key="google-map"
          title="Sneaky Pest Control Location"
        ></iframe>
      </div>
    </Router>
  );
};

export default App;
