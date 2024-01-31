// Contact.jsx

import React from 'react';

import '..//assets/css/Contact.css'; // Import your custom CSS for styling

const Contact = () => {
  return (
    <div>
      
      <div className="contact-container">
        <h2 className="contact-header">Contact Us</h2>
        <p className="contact-text">
          We value your feedback and are here to assist you. Please feel free to reach out to us using the contact details below.
        </p>

        <div className="contact-details">
          <div className="contact-info">
            <h4>Email</h4>
            <p>info@yourrechargestore.com</p>
          </div>
          <div className="contact-info">
            <h4>Phone</h4>
            <p>+1 123 456 7890</p>
          </div>
          <div className="contact-info">
            <h4>Address</h4>
            <p>
              Your Recharge Store,
              <br />
              123 Main Street,
              <br />
              City, Country
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h4>Send us a Message</h4>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
