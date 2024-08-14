import React from 'react';
import './Message.css';

const Message = () => {
  return (
    <div className="message-section container">
      <div className="message-card">
        <div className="message-header">
          <h2>A Message from the General Manager</h2>
          <div className="message-line"></div>
        </div>
        <p className="message-intro">Dear Valued Clients and Partners,</p>
        <p>Welcome to Afri Eco Habitat, where we are dedicated to building a sustainable future through innovative and eco-friendly solutions. Our mission is to create high-quality, environmentally conscious products that meet the needs of modern living while safeguarding our planet's precious resources.</p>
        <p>Our journey began with a bold vision to transform the construction industry in Tunisia and beyond. Today, we are proud to offer a diverse range of products and services that exemplify our unwavering commitment to sustainability and excellence. From our modular homes designed for efficient and sustainable living, to our exquisite Chemtou marble that adds timeless beauty to any space, and our pioneering efforts in recycling construction waste to create a greener future, each of our initiatives is driven by our core values of innovation, quality, and environmental stewardship.</p>
        <p>As the General Manager, I am honored to lead a talented team dedicated to achieving these ambitious goals. Our success is built on the trust and satisfaction of our clients, and we continually strive to exceed their expectations in every project we undertake.</p>
        <p>Looking ahead, we are thrilled to expand our horizons by partnering with like-minded organizations across Africa. Together, we will leverage our extensive experience to create homes that are not only affordable and built swiftly, but also energy-efficient and environmentally respectful. This collaborative effort will bring our vision of sustainable living to more communities, ensuring that everyone has access to quality homes that are both eco-friendly and economically viable.</p>
        <p>Thank you for choosing Afri Eco Habitat. Let us join hands in building a sustainable future for generations to come.</p>
        <p className="message-signature">Warm regards,<br />Soltani Imed<br />General Manager, Afri Eco Habitat</p>
      </div>
    </div>
  );
};

export default Message;
