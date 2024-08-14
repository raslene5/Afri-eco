import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setLanguage(lang);
    const googleTranslateElement = document.querySelector('.goog-te-combo');
    if (googleTranslateElement) {
      googleTranslateElement.value = lang;
      googleTranslateElement.dispatchEvent(new Event('change'));
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false); // Close the menu when an option is selected
    }
  };

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container" onClick={() => handleSetActive('hero')}>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className={`menu-icon ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? 'show' : ''}`}>
          <li className={activeLink === 'hero' ? 'active' : ''}>
            <Link 
              to='hero' 
              smooth={true} 
              offset={-80} 
              duration={500} 
              onSetActive={() => handleSetActive('hero')}
              onClick={() => handleSetActive('hero')}
            >
              Home
            </Link>
          </li>
          <li className={activeLink === 'products' ? 'active' : ''}>
            <Link 
              to='products' 
              smooth={true} 
              offset={-180} 
              duration={500} 
              onSetActive={() => handleSetActive('products')}
              onClick={() => handleSetActive('products')}
            >
              Our Products
            </Link>
          </li>
          <li className={activeLink === 'about' ? 'active' : ''}>
            <Link 
              to='about' 
              smooth={true} 
              offset={-170} 
              duration={500} 
              onSetActive={() => handleSetActive('about')}
              onClick={() => handleSetActive('about')}
            >
              About Us
            </Link>
          </li>
          <li className={activeLink === 'gallery' ? 'active' : ''}>
            <Link 
              to='gallery' 
              smooth={true} 
              offset={-330} 
              duration={500} 
              onSetActive={() => handleSetActive('gallery')}
              onClick={() => handleSetActive('gallery')}
            >
              Gallery
            </Link>
          </li>
          <li className={activeLink === 'testimonials' ? 'active' : ''}>
            <Link 
              to='testimonials' 
              smooth={true} 
              offset={-80} 
              duration={500} 
              onSetActive={() => handleSetActive('testimonials')}
              onClick={() => handleSetActive('testimonials')}
            >
              Testimonials
            </Link>
          </li>
          <li className={activeLink === 'contact' ? 'active' : ''}>
            <Link 
              to='contact' 
              smooth={true} 
              offset={-130} 
              duration={500} 
              className='btn'
              onSetActive={() => handleSetActive('contact')}
              onClick={() => handleSetActive('contact')}
            >
              Contact Us
            </Link>
          </li>
          <li className="language-switcher">
            <FaGlobe />
            <select onChange={handleLanguageChange} value={language}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="zh-CN">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ar">Arabic</option>
              {/* Add more languages as needed */}
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
