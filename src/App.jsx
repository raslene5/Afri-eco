import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero/Hero';
import Products from './Components/Products/Products';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Company from './Components/Company/Company';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Message from './Components/Message/Message';
import AfterSalesService from './Components/AfterSalesService/AfterSalesService'; 



const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Products' title='Explore Our Products' />
        <Products />
        <About setPlayState={setPlayState} />
        <Title subtitle='A Message from the General Manager' title='' />
        <Message />
        <Title subtitle='Gallery' title='Company Photos' />
        <Company />
        <Title subtitle='Testimonials' title='What Our Clients Say' />
        <Testimonials />
        <Title subtitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Title subtitle='' title='' /> {/* Add a title for the section */}
        <AfterSalesService /> {/* Include the AfterSalesService component */}
        
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;