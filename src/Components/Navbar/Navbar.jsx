import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Add any additional logic to change the language of the website here
  };

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={`nav-links ${mobileMenu ? 'show' : ''}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='products' smooth={true} offset={-260} duration={500}>Our Products</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
        <li><Link to='company' smooth={true} offset={-260} duration={500}>Blog</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        <li className="language-switcher">
          <button className={language === 'EN' ? 'active' : ''} onClick={() => handleLanguageChange('EN')}>EN</button> | 
          <button className={language === 'FR' ? 'active' : ''} onClick={() => handleLanguageChange('FR')}>FR</button>
        </li>
      </ul>
      <img src={menu_icon} alt='Menu' className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
