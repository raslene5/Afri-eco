import React from 'react';
import './Products.css';
import m11 from '../../assets/m11.jpg';
import m22 from '../../assets/m22.webp';
import m33 from '../../assets/m33.jpg';
import m1icon from '../../assets/m1icon.png';
import m2icon from '../../assets/m2icon.jpeg';
import m3icon from '../../assets/m3icon.png';

const Products = () => {
    return (
        <div className='products'>
            <div className="product">
                <img src={m11} alt="Model 1" />
                <div className="caption">
                    <img src={m1icon} alt="Model 1 Icon" />
                    <p>Our models for private customers</p>
                </div>
            </div>
            <div className="product">
                <img src={m22} alt="Model 2" />
                <div className="caption">
                    <img src={m2icon} alt="Model 2 Icon" />
                    <p>Our models for professionals</p>
                </div>
            </div>
            <div className="product">
                <img src={m33} alt="Model 3" />
                <div className="caption">
                    <img src={m3icon} alt="Model 3 Icon" />
                    <p>Our models for public service</p>
                </div>
            </div>
        </div>
    );
};

export default Products;
