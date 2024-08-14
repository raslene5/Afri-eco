import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Modal from '../Modal/Modal';
import './Footer.css';

const sections = [
    {
        title: 'Support',
        items: ['Pricing', 'Guides']
    },
    {
        title: 'Company',
        items: ['About', 'Blog']
    },
    {
        title: 'Legal',
        items: ['Claims', 'Privacy Policy', 'Terms and Conditions']
    },
];

const socialLinks = [
    {
        name: 'Facebook',
        icon: FaFacebook,
        link: 'https://facebook.com/'
    },
    {
        name: 'Instagram',
        icon: FaInstagram,
        link: 'https://instagram.com/'
    },
    {
        name: 'Twitter',
        icon: FaTwitter,
        link: 'https://twitter.com/'
    },
];

const content = {
    'Pricing': 'Details about our pricing options...',
    'Documentation': 'Access our comprehensive documentation...',
    'Guides': 'Explore our helpful guides...',
    'Status': 'Check the status of our services...',
    'Blog': 'Read our latest blog posts...',
    'Partners': 'Discover our valued partners...',
    'Privacy Policy': (
        <div>
            <h2>Privacy Policy</h2>
            <p>
                This Privacy Policy describes how we handle your personal information for our services on the Afri Eco Habitat website.
                By using this site, you consent to the data practices described in this statement.
            </p>
            <h3>Collection of your Personal Information</h3>
            <p>
                We collect personally identifiable information, such as your e-mail address, name, home or work address, or telephone number.
                We also collect anonymous demographic information, which is not unique to you, such as your ZIP code, age, gender, preferences,
                interests, and favorites.
            </p>
            <h3>Use of your Personal Information</h3>
            <p>
                We use your personal information to operate the Afri Eco Habitat website and deliver the services you have requested.
                We also use your personally identifiable information to inform you of other products or services available from Afri Eco Habitat.
            </p>
            <h3>Sharing Information with Third Parties</h3>
            <p>
                Afri Eco Habitat does not sell, rent, or lease its customer lists to third parties. We may share data with trusted partners to
                help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries.
            </p>
            <h3>Security of your Personal Information</h3>
            <p>
                Afri Eco Habitat secures your personal information from unauthorized access, use, or disclosure. We use encryption methods for
                the secure transmission of data.
            </p>
            <p>... and more content as necessary ...</p>
        </div>
    ),
    'Terms and Conditions': (
        <div>
            <h3>Terms and Conditions</h3>
            <p>Welcome to Afri Eco Habitat! These Terms and Conditions outline the rules and regulations for the use of our website and services.</p>
            <h4>1. Acceptance of Terms</h4>
            <p>By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use our website.</p>
            <h4>2. Changes to Terms</h4>
            <p>We may update these Terms and Conditions from time to time. The updated version will be posted on our website, and your continued use of the site signifies your acceptance of the changes.</p>
            <h4>3. User Responsibilities</h4>
            <p>You are responsible for ensuring that any information you provide to us is accurate and up-to-date. You are also responsible for maintaining the confidentiality of your account and password.</p>
            <h4>4. Intellectual Property</h4>
            <p>All content on our website, including text, images, and logos, is the property of Afri Eco Habitat and protected by intellectual property laws. You may not reproduce or distribute any content without our express written permission.</p>
            <h4>5. Limitation of Liability</h4>
            <p>We will not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our total liability will not exceed the amount you paid for the services in question.</p>
            <h4>6. Governing Law</h4>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of our jurisdiction. Any disputes arising from these Terms will be resolved in the courts of our jurisdiction.</p>
            <p>If you have any questions about these Terms and Conditions, please contact us at [@AfriEcoHabitat].</p>
        </div>
    ),
    'Claims': 'Understand our claims process...',
    'Policies': 'Review our policies...'
};

const Footer = () => {
    const [modalData, setModalData] = useState({ isOpen: false, title: '', content: '' });

    const handleOpenModal = (title) => {
        setModalData({
            isOpen: true,
            title,
            content: content[title] || 'Content not available.'
        });
    };

    const handleCloseModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                {sections.map((section, index) => (
                    <div key={index} className="footer-section">
                        <h3>{section.title}</h3>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i}>
                                    {item === 'About' ? (
                                        <Link
                                            to='about'
                                            smooth={true}
                                            offset={-200}
                                            duration={500}
                                            className="footer-link"
                                        >
                                            {item}
                                        </Link>
                                    ) : item === 'Claims' ? (
                                        <Link
                                            to='after-sales-service'
                                            smooth={true}
                                            offset={-50}
                                            duration={500}
                                            className="footer-link"
                                        >
                                            {item}
                                        </Link>
                                    ) : (
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleOpenModal(item);
                                            }}
                                            className="footer-link"
                                        >
                                            {item}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="footer-section contact-form">
                    <div id="mc_embed_shell">
                        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                        <div id="mc_embed_signup">
                            <form action="https://medtech.us22.list-manage.com/subscribe/post?u=e87c8e9c612231afe52f25c93&amp;id=874d7f4c25&amp;f_id=0050d6e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll">
                                    <h3>Subscribe to our newsletter</h3>
                                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                                    </div>
                                    <div id="mce-responses" className="clear foot">
                                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                    </div>
                                    <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                                        <input type="text" name="b_e87c8e9c612231afe52f25c93_874d7f4c25" tabIndex="-1" value="" />
                                    </div>
                                    <div className="optionalParent">
                                        <div className="clear foot">
                                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                                            <p style={{ margin: "0px auto" }}>
                                                <a href="http://eepurl.com/iUiA4E" title="Mailchimp - email marketing made easy and fun">
                                                    <span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px", fontSize: "12px", margin: "0px", textDecoration: "none" }}>
                                                        <img src="//cdn-images.mailchimp.com/monkey_rewards/grow-business-banner-2.png" style={{ width: "100%", maxWidth: "240px", height: "auto", border: "none", display: "block", margin: "0px auto", padding: "4px 0px", fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "bold", lineHeight: "1.5em", color: "#343434", textAlign: "center", textDecoration: "none" }} alt="Mailchimp Grow Business" width="null" height="null" />
                                                    </span>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-section socials">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        {socialLinks.map((social, index) => (
                            <a href={social.link} key={index} target="_blank" rel="noopener noreferrer">
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Afri Eco Habitat. All rights reserved.</p>
            </div>
            <Modal
                isOpen={modalData.isOpen}
                onClose={handleCloseModal}
                title={modalData.title}
                content={modalData.content}
            />
        </footer>
    );
};

export default Footer;