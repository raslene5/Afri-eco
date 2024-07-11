import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <p>&copy; 2024 Afri Eco Habitat. All rights reserved.</p>
        <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
    </div>
  );
};

export default Footer;
