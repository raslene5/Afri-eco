import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <FaPaperPlane /></h3>
        <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our community.</p>
        <ul>
          <li><FaEnvelope /> Contact@AfriEcoHabitat</li>
          <li><FaPhone /> +216-9290246</li>
          <li><FaMapMarkerAlt /> The industrial zone EL Ertiyeh<br /> MA 8189, Jendouba</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit} className="contact-form">
          <label htmlFor='name'>Your name</label>
          <input type='text' name='name' id='name' placeholder='Enter your name' required />
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' name='phone' id='phone' placeholder='Enter your mobile number' pattern="[0-9]+" required />
          <label htmlFor='message'>Write your message here</label>
          <textarea name='message' id='message' rows={6} placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <FaPaperPlane /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
