import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero/Hero'; // Updated import path for Hero component
import Products from './Components/Products/Products';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Company from './Components/Company/Company';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'; // Adjusted import path for VideoPlayer component
import Message from './Components/Message/Message';
const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Products' title='Explore Our Products' /> {/* Adjusted subtitle for Products */}
        <Products />
        <About setPlayState={setPlayState} />
        <Title subtitle='A Message from the General Manager
' title='' />
        <Message /> 
        <Title subtitle='Gallery' title='Company Photos' /> {/* Corrected 'Gllery' to 'Gallery' */}
        <Company />
        <Title subtitle='Testimonials' title='What Our Clients Say' /> {/* Updated title for clarity */}
        <Testimonials />
        <Title subtitle='Contact Us' title='Get in Touch' /> {/* Updated subtitle for Contact */}
        <Contact />
        <Footer />
        
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
