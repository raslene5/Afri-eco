import React, { useState } from 'react';
import { FaWrench, FaShieldAlt, FaHeadset, FaExchangeAlt } from 'react-icons/fa';
import './AfterSalesService.css';

const AfterSalesService = () => {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // You can add your form submission logic here
        // For example, you can use fetch to send data to a server
        
        // Simulating a successful form submission
        setFormStatus('Submission Successful! We will get back to you soon.');

        // Clear form fields
        event.target.reset();
    };

    return (
        <div className="after-sales-service">
            <h2>After-Sales Service</h2>
            <p className="intro">
                Welcome to our After-Sales Service section. We are committed to providing comprehensive support to our customers after purchase.
                You can reach out to us for any assistance, product maintenance, warranty claims, or any other support related to our products.
            </p>
            <div className="service-container">
                <div className="service-item">
                    <FaWrench className="service-icon" />
                    <h3>Product Maintenance</h3>
                    <p>Ensure your products stay in top condition with our maintenance services.</p>
                </div>
                <div className="service-item">
                    <FaShieldAlt className="service-icon" />
                    <h3>Warranty Claims</h3>
                    <p>Easy and hassle-free process for warranty claims on our products.</p>
                </div>
                <div className="service-item">
                    <FaHeadset className="service-icon" />
                    <h3>Technical Support</h3>
                    <p>Expert assistance for any technical issues you may encounter.</p>
                </div>
                <div className="service-item">
                    <FaExchangeAlt className="service-icon" />
                    <h3>Replacement and Returns</h3>
                    <p>Simple and efficient system for product replacements and returns.</p>
                </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Us a Message</h3>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                <button type="submit">Submit</button>
                {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
            <div className="contact-info-section">
                <p className="contact-info">
                    <strong>Email:</strong> <a href="mailto:support@afriecohabitat.com">support@afriecohabitat.com</a>
                </p>
                <p className="contact-info">
                    <strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a>
                </p>
            </div>
        </div>
    );
};

export default AfterSalesService;
