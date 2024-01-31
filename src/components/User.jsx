// Admin.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarUser from './SidebarUser';
import './sidebarUser.css'; // Import the CSS file

const User = () => {
  const [isSide, setSide] = useState(false);

  const tog = () => {
    setSide(!isSide);
  };

  return (
    <div>
      <nav className="user-navbar">
        <button className={`sidebarAA-toggle ${isSide ? 'open' : ''}`} onClick={tog}>
          &#9776;
        </button>
        <div className="user-navbar-header">
          
        </div>
      </nav>
      {isSide && <SidebarUser />}
    </div>
  );
};

export default User;
