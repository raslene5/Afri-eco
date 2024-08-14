import React, { useState } from 'react';
import './Hero.css';
import heroImage from '../../../assets/hero.png';
import dark from '../../../assets/dark.png';
import videoSrc from '../../../assets/Eco_Marble_Creations (1).mp4';

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div 
      className='hero'
      style={{ 
        backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${heroImage})` 
      }}
    >
      <div className="hero-content container">
        <div className="hero-text">
          <h1>Elegance in Every Stone, Sustainability in Every Choice</h1>
          <p>Discover the perfect harmony of elegance and eco-consciousness. Afri Eco Habitat offers premium marble that enhances your space and respects the planet. By integrating advanced techniques in concrete recycling, we ensure that every piece of marble not only exudes timeless beauty but also contributes to a sustainable future. Choose Afri Eco Habitat for a blend of sophistication and environmental responsibility.</p>
          <button className='btn' onClick={handleOpenPopup}>
            Explore More <img src={dark} alt='Explore more icon' />
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={handleClosePopup}>×</button>
            <div className="video-wrapper">
              <video controls autoPlay className="video-player">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="popup-info">
              <h2>Recycling Concrete</h2>
              <p>
                At Afri Eco Habitat, we are committed to sustainability. Our advanced concrete recycling techniques transform waste into high-quality, eco-friendly marble products. This process not only reduces environmental impact but also enhances the durability and aesthetic appeal of our marble. Join us in our mission to create a greener future.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
