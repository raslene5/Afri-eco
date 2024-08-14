import React, { useRef } from 'react';
import './Testimonials.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -75) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className="testimonials">
            <FaArrowRight className="next-btn" onClick={slideForward} />
            <FaArrowLeft className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="Sarrah Jackson" />
                                <div>
                                    <h3>Sarrah Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>"I couldn't be happier with my purchase from Afri Eco Habitat. The quality of the marble is exceptional, and it has transformed my kitchen into a luxurious space. The customer service was fantastic, guiding me through the selection process and ensuring timely delivery. Highly recommend!"</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="Amir Dupré" />
                                <div>
                                    <h3>Amir Dupré</h3>
                                    <span>Alberta, Canada</span>
                                </div>
                            </div>
                            <p>"Afri Eco Habitat exceeded my expectations with their stunning marble products. The craftsmanship is top-notch, and the unique patterns add a touch of elegance to my home. The team was professional and attentive, making the entire experience seamless. I'll definitely be a returning customer!"</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="Samira Ayedi" />
                                <div>
                                    <h3>Samira Ayedi</h3>
                                    <span>Tunis, Tunisia</span>
                                </div>
                            </div>
                            <p>"From start to finish, our experience with Afri Eco Habitat was fantastic. The marble selection was extensive, and the staff was incredibly helpful. Our new flooring looks amazing, and we couldn’t be happier!"</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="Celine Samuel" />
                                <div>
                                    <h3>Celine Samuel</h3>
                                    <span>Paris, France</span>
                                </div>
                            </div>
                            <p>"We were impressed by the variety and quality of marble at Afri Eco Habitat. The installation was seamless, and the finished product is absolutely beautiful. Exceptional service and outstanding products!"</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
