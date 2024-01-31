// App.jsx
import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserProfile from './pages/UserProfile';
import './x.css';

// Direct import for the Home component
import Home from './pages/Home';

// Lazy-loaded components
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Admin = lazy(() => import('./components/Admin'));
const User = lazy(() => import('./components/User'));
const About = lazy(() => import('./pages/About'));
import RechargePlanPage from './pages/RechargePlanPage';
import AdminProfile from './pages/AdminProfile';

const App = () => {
  // Initialize state for selectedPlan and rechargePlans
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [rechargePlans, setRechargePlans] = useState([
    // Default recharge plans or fetched from an API
    { id: 1, name: 'Basic Plan', amount: 10, validity: '30 days' },
    { id: 2, name: 'Standard Plan', amount: 20, validity: '60 days' },
    { id: 3, name: 'Premium Plan', amount: 30, validity: '90 days' },
  ]);

  // Function to handle plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setRechargeAmount(plan.amount.toString());
  };

  return (
    <Router>
      <div className="app-container">
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/user" element={<User />} />
              <Route path="/about" element={<About />} />
              <Route path="/userProfile" element={<UserProfile />} />
              <Route path="/AdminProfile" element={<AdminProfile />} />
              {/* Use camelCase for route paths and match with the component name */}
              <Route path="/ReachargePlanPage" element={<RechargePlanPage plans={rechargePlans} selectedPlan={selectedPlan} onPlanSelect={handlePlanSelect} />} />
            </Routes>
          </Suspense>
          {/* {selectedPlan && (
            <div>
              <h2>Selected Plan</h2>
              <p>Name: {selectedPlan.name}</p>
              <p>Amount: ${selectedPlan.amount}</p>
              <p>Validity: {selectedPlan.validity}</p>
            </div>
          )} */}
        </div>
      </div>
    </Router>
  );
}

export default App;
