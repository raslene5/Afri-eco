import React from 'react';
import './Company.css';
import gallery1 from '../../assets/gallery1.png';
import gallery2 from '../../assets/gallery2.png';
import gallery3 from '../../assets/gallery3.png';
import gallery4 from '../../assets/gallery4.png';
import white_arrow from '../../assets/white-arrow.png';

const Company = () => {
  return (
    <div className='company'>
      <div className="gallery">
        <img src={gallery1} alt='Gallery Image 1' />
        <img src={gallery2} alt='Gallery Image 2' />
        <img src={gallery3} alt='Gallery Image 3' />
        <img src={gallery4} alt='Gallery Image 4' />
      </div>
      <button className='btn dark-btn'>
        See more here 
        <img src={white_arrow} alt='Arrow Icon' />
      </button>
    </div>
  );
}

export default Company;
