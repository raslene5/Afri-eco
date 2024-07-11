// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';
import heroImage from '../../../assets/hero.png';
import dark from '../../../assets/dark.png';

const Hero = () => {
  return (
    <div 
      className='hero'
      style={{ backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${heroImage})` }}
    >
      <div className="hero-content container">
        <div className="hero-text">
          <h1>Elegance in Every Stone, Sustainability in Every Choice</h1>
          <p>Discover the perfect harmony of elegance and eco-consciousness. Afri Eco Habitat offers premium marble that enhances your space and respects the planet.</p>
          <button className='btn'>Explore More <img src={dark} alt='Explore more icon' /></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
