// Home.jsx

import React from 'react';
import Navbar from '../components/navbar';
import '..//assets/css/home.css'; // Import the Home.css file
import SimpleImageSlider from "react-simple-image-slider";

const Home = () => {

const images = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];
  return (
    <div>
      <Navbar />
      <div className="home-container">
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
        <h2 className="home-header">Welcome to our NNP Recharge Store !</h2>
        <p className="home-text">Explore amazing content and features on our website.</p>
        <button className="home-button" >Get Started</button>
      </div>
    </div>
  );
};

export default Home;
