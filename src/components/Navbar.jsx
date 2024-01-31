// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import Sidebar from './Sidebar'; // Import the Sidebar component

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className='navbar'>
        {/* <button className={`sidebar-toggle ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          &#9776;
        </button>  */}
        <div className="navbar-header">
          <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/services">Services</Link></li>  */}
            <li><Link to="/contact">Contact</Link></li>
             {/* <li><Link to="/Admin">Admin</Link></li>
            <li><Link to="/User">User</Link></li>  */}
             <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
          </ul>
          
        </div>
      </nav>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
};

export default Navbar;
