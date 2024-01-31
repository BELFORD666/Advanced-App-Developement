// Admin.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin'; // Import the Sidebar component
import './sidebarAdmin.css'; // Import the CSS file
import RechargePlanPageAdmin from '../pages/RechargePlanPageAdmin';

const Admin = () => {
  const [isSidebar, setSidebar] = useState(false);

  const toggle = () => {
    setSidebar(!isSidebar);
  };

  return (
    <div>
      <nav className="admin-navbar">
        <button className={`sidebarA-toggle ${isSidebar ? 'open' : ''}`} onClick={toggle}>
          &#9776;
        </button>
        <div className="admin-navbar-header">
          
        </div>
      </nav>
      {isSidebar && <SidebarAdmin />}
      <RechargePlanPageAdmin/>
    </div>
  );
};

export default Admin;
