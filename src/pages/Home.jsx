// Home.jsx

import React from 'react';
import Navbar from '../components/navbar';
import '..//assets/css/home.css'; // Import the Home.css file
import SimpleImageSlider from "react-simple-image-slider";

const Home = () => {

const images = [
  { url: "https://www.gadgets360.com/static/v1/images/og_mobile_recharge_plans.png" },
  { url: "https://storage.googleapis.com/production-payrup-assets/category/9-1637737266-5860-category.png" },
  { url: "https://assets.isu.pub/document-structure/221216060228-0b883e266dbf3659da51bf26b04442a4/v1/7de3fa1940708e21c0781a34ce193cef.jpeg" },
  { url: "https://storage.googleapis.com/production-payrup-assets/post/24-1638253509-3701-post.png" },
  { url: "https://www.onlinekkrecharge.in/assets/new_outside_template_things/images/services/mobile-recharge.png" },
  { url: "https://paytmblogcdn.paytm.com/wp-content/uploads/2021/07/MobileRecharge_36_Easiest-Way-To-Recharge-Mobile-Online--800x500.jpg" },
  { url: "https://cdn.gadgets360.com/pricee/assets/category/recharge-1200x800.png" },
];
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h2 className="home-header">Welcome to our PAYRUP Recharge Store !</h2>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
        <p className="home-text">Explore amazing content and features on our website.</p>
        <button className="home-button" >Get Started</button>
      </div>
    </div>
  );
};

export default Home;
