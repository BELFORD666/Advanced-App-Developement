// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
 // Import the CSS file

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li><Link to="/">Home</Link></li>
       
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
