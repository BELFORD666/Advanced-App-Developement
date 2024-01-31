import React from 'react';
import { Link } from 'react-router-dom';


 

const SidebarAdmin = () => {
   

  return (
    
    <div className='sidebarAdmin'>
       
      <ul>
       
      <li><Link to="/">Home</Link></li>
            <li><Link to="/AdminProfile">Profile</Link></li>
            {/* <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li>
             */}
        
      </ul>
    </div>
  );
 
};

export default SidebarAdmin;