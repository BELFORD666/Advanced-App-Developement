import React from 'react';
import { Link } from 'react-router-dom';


 

const SidebarUser = () => {
   

  return (
    
    <div className='sidebarUser'>
       
      <ul>
       
      <li><Link to="/">Home</Link></li>
            <li><Link to="/UserProfile">Profile</Link></li>
            {/* <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Signup</Link></li> */}
            <li><Link to="/ReachargePlanPage">Plans</Link></li>
            
        
      </ul>
    </div>
  );
 
};

export default SidebarUser;