import React, { useState } from 'react';
import '..//assets/css/Plan.css';

const RechargePlanPage = ({ selectedPlan, onPlanSelect }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [operator, setOperator] = useState('');

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlePlanSelect = (plan) => {
    setRechargeAmount(plan.amount.toString()); // Set rechargeAmount based on the selected plan
    onPlanSelect(plan);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleRechargeSubmit = () => {
    // Implement your logic to handle the recharge submission
    // You can access mobileNumber, rechargeAmount, and operator here
  };

  const rechargePlans = [
    { id: 1, name: 'Basic Plan', amount: 10, validity: '30 days' },
    { id: 2, name: 'Standard Plan', amount: 20, validity: '60 days' },
    { id: 3, name: 'Premium Plan', amount: 30, validity: '90 days' },
  ];

  return (
    <div className='RechargePlanPage__recharge-plan-container'>
      <div className='recharge-container'>
        <h2>Recharge Details</h2>
        <div className='input-field'>
          <label htmlFor='mobileNumber'>Mobile Number:</label>
          <input type='text' id='mobileNumber' value={mobileNumber} onChange={handleMobileNumberChange} />
        </div>
        <div className='input-field'>
          <label htmlFor='rechargeAmount'>Recharge Amount:</label>
          <input type='text' id='rechargeAmount' value={rechargeAmount} readOnly />
        </div>
        <div className='input-field'>
          <label htmlFor='operator'>Operator:</label>
          <label htmlFor='operator'>Operator:</label>
  <select id='operator' value={operator} onChange={handleOperatorChange}>
    <option value="">Select Operator</option>
    <option value="Airtel">Airtel</option>
    <option value="Vodafone">Vodafone</option>
    <option value="Jio">Jio</option>
    {/* Add more operators as needed */}
  </select>
        </div>
        <button onClick={handleRechargeSubmit}>Recharge Now</button>
      </div>
      <div className='RechargePlans'>

      <h1>Recharge Plans</h1>
      <ul>
        <div className='horizontal-plans'>
          {rechargePlans.map((plan) => (
              <li key={plan.id} className='plan-item' onClick={() => handlePlanSelect(plan)}>
              <strong>{plan.name}</strong>: ${plan.amount} - Validity: {plan.validity}{' '}
              {selectedPlan && selectedPlan.id === plan.id && <span>(Selected)</span>}
            </li>
          ))}
        </div>
      </ul>
          </div>
    </div>
  );
};

export default RechargePlanPage;
