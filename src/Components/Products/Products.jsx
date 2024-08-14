import React from 'react';
import './Products.css';
import m11 from '../../assets/m11.jpg';
import m22 from '../../assets/m22.webp';
import m33 from '../../assets/m33.jpg';
import m55 from '../../assets/m55.png';
import m1icon from '../../assets/m1icon.png';
import m2icon from '../../assets/m2icon.jpeg';
import m3icon from '../../assets/m3icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Products = () => {
    return (
        <div className='products'>
            <div className="section-header">
                
            </div>
            <div className='product-gallery'>
                <div className='product-card'>
                    <img src={m11} alt="Model 1" className='product-image' />
                    <div className='card-content'>
                        <img src={m1icon} alt="Model 1 Icon" />
                        <p>Modular Homes</p>
                    </div>
                </div>
                <div className='product-card'>
                    <img src={m22} alt="Model 2" className='product-image' />
                    <div className='card-content'>
                        <img src={m2icon} alt="Model 2 Icon" />
                        <p>Marble</p>
                    </div>
                </div>
                <div className='product-card'>
                    <img src={m55} alt="Model 3" className='product-image' />
                    <div className='card-content'>
                        <img src={m3icon} alt="Model 3 Icon" />
                        <p>Waste Recycling</p>
                    </div>
                </div>
            </div>
            <button className='btn dark-btn'>
                See More Here 
                <img src={white_arrow} alt='Arrow Icon' />
            </button>
        </div>
    );
};

export default Products;
