import React from 'react';
import './About.css';
import aboutimg from '../../assets/aboutimg.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutimg} alt='About Us' className='about-img'/>
        <img src={play_icon} alt='Play Icon' className='play-icon' onClick={() => { setPlayState(true) }}/>
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Timeless Elegance, Sustainable Choice</h2>
        <p>
          At Afro Eco Habitat, we blend the timeless elegance of marble with a commitment to sustainability. Our meticulously crafted marble products not only enhance the beauty of your spaces but also reflect our dedication to environmental responsibility. Discover the perfect balance of luxury and eco-consciousness with Afro Eco Habitat.
        </p>
      </div>
    </div>
  )
}

export default About;