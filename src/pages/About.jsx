// About.jsx

import React from 'react';
import Navbar from '../components/navbar';
import '..//assets/css/About.css'; // Import your custom CSS for styling

const About = () => {
  return (
    <div>
      
      <div className="about-container">
        <h2 className="about-header">About Us</h2>
        <p className="about-text">
          Welcome to [Your Mobile Recharge Store Name], your one-stop solution for all your mobile recharge needs.
        </p>
        <p className="about-text">
          At [Your Store Name], we are committed to providing fast, secure, and convenient mobile recharge services to our customers.
          With our user-friendly platform, you can easily recharge your mobile phone, DTH, and data cards in just a few clicks.
        </p>
        <p className="about-text">
          Our mission is to simplify the recharge process and ensure a seamless experience for our customers. We offer a wide range of
          recharge options for various service providers, allowing you to stay connected effortlessly.
        </p>
        <p className="about-text">
          Key Features:
        </p>
        <ul className="about-features">
          <li>Quick and hassle-free recharge process</li>
          <li>Secure payment options for your peace of mind</li>
          <li>Wide range of service providers supported</li>
          <li>24/7 customer support to assist you with any queries</li>
        </ul>
        <p className="about-text">
          Whether you need to top up your prepaid mobile balance, recharge your DTH subscription, or add data to your mobile plan,
          [Your Store Name] has got you covered.
        </p>
        <p className="about-text">
          Thank you for choosing [Your Store Name] for all your mobile recharge needs. We look forward to serving you and ensuring
          you always stay connected.
        </p>
      </div>
    </div>
  );
};

export default About;
