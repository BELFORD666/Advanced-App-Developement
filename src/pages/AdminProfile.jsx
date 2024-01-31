// UserProfile.jsx
import React, { useState } from 'react';
import '..//assets/css/profile.css';
import SidebarUser from '../components/SidebarUser';
import '..//components/SidebarUser.css'; 


const AdminProfile = () => {
  const [isEditing, setEditing] = useState(false);
  const [userName, setUserName] = useState('Belford');
  const [mobileNumber, setMobileNumber] = useState('9566793550');
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [telecomOperator, setTelecomOperator] = useState('');

  const [isSide, setSide] = useState(false);

  const tog = () => {
    setSide(!isSide);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Add logic to save the updated user data to your backend or state
    setEditing(false);
  };

  const handleCancelClick = () => {
    // Handle cancel editing
    setEditing(false);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleRechargeAmountChange = (e) => {
    setRechargeAmount(e.target.value);
  };

  const handleTelecomOperatorChange = (e) => {
    setTelecomOperator(e.target.value);
  };

  return (
    <div className='dj'>
  <nav className="user-navbar">
        <button className={`sidebarAA-toggle ${isSide ? 'open' : ''}`} onClick={tog}>
          &#9776;
        </button>
        <div className="user-navbar-header">
          
        </div>
      </nav>
      {isSide && <SidebarUser />}
    
    
    <div className='userProfile-container'>
       
     
      <h2>Admin Profile</h2>
      {isEditing ? (
        <div>
          <label>
            Name:
            <input type="text" value={userName} onChange={handleNameChange} />
          </label>
          <label>
            Mobile Number:
            <input type="text" value={mobileNumber} onChange={handleMobileNumberChange} />
          </label>
          <label>
            Recharge Amount:
            <input type="text" value={rechargeAmount} onChange={handleRechargeAmountChange} />
          </label>
          <label>
            Telecom Operator:
            <select value={telecomOperator} onChange={handleTelecomOperatorChange}>
              <option value="">Select Operator</option>
              <option value="Airtel">Airtel</option>
              <option value="Vodafone">Vodafone</option>
              <option value="Jio">Jio</option>
              {/* Add more operators as needed */}
            </select>
          </label>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div className='profile-info'>
          <p>Name: {userName}</p>
          <p>Mobile Number: {mobileNumber}</p>
          <p>Recharge Amount: {rechargeAmount}</p>
          <p>Telecom Operator: {telecomOperator}</p>
          <button className='edit-button' onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default AdminProfile;
