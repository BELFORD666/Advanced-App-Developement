import React, { useState } from 'react';
import '..//assets/css/Plan.css';

const RechargePlanPageAdmin = ({ selectedPlan, onPlanSelect }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [operator, setOperator] = useState('');
  const [rechargePlans, setRechargePlans] = useState([
    { id: 1, name: 'Basic Plan', amount: 10, validity: '30 days' },
    { id: 2, name: 'Standard Plan', amount: 20, validity: '60 days' },
    { id: 3, name: 'Premium Plan', amount: 30, validity: '90 days' },
  ]);

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

  const handleUpdatePlan = (updatedPlan) => {
    setRechargePlans((prevPlans) =>
      prevPlans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan))
    );
  };

  const handleDeletePlan = (planId) => {
    setRechargePlans((prevPlans) => prevPlans.filter((plan) => plan.id !== planId));
  };

  return (
    
    <div className='RechargePlanPageAdmin__recharge-plan-container'>
      
      <div className='RechargePlans'>
        <h1>Recharge Plans</h1>
        <ul>
          <div className='horizontal-plans'>
            {rechargePlans.map((plan) => (
              <li key={plan.id} className='plan-item' onClick={() => handlePlanSelect(plan)}>
                <strong>{plan.name}</strong>: ${plan.amount} - Validity: {plan.validity}{' '}
                {selectedPlan && selectedPlan.id === plan.id && <span>(Selected)</span>}
                <button onClick={() => handleUpdatePlan({ ...plan, amount: 40 })}>
                  Update Amount
                </button>
                <button onClick={() => handleUpdatePlan({ ...plan, validity: '180 days' })}>
                  Update Validity
                </button>
                <button onClick={() => handleDeletePlan(plan.id)}>Delete</button>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RechargePlanPageAdmin;
