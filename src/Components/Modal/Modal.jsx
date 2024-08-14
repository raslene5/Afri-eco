// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, title, content, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-content">
                    {title === 'Pricing' ? (
                        <div className="pricing-filter">
                            <h3>Filter by Price</h3>
                            <form>
                                <div className="filter-group">
                                    <label htmlFor="min-price">Min Price:</label>
                                    <input type="number" id="min-price" name="min-price" placeholder="0" />
                                </div>
                                <div className="filter-group">
                                    <label htmlFor="max-price">Max Price:</label>
                                    <input type="number" id="max-price" name="max-price" placeholder="10000" />
                                </div>
                                <button type="submit" className="filter-button">Apply Filter</button>
                            </form>
                        </div>
                    ) : typeof content === 'string' ? (
                        <p>{content}</p>
                    ) : (
                        content
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
