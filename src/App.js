import React, { useState, useEffect } from 'react';
import OnboardingWizard from './components/Onboarding/OnboardingWizard';
import Dashboard from './components/Dashboard/Dashboard';
import './styles.css';
import { api } from './api/mockApi';

const App = () => {
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {

    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
      setOnboardingComplete(true);
    }
  }, []);

  const handleOnboardingComplete = async (data) => {
  try {
    const response = await api.saveUserData(data);
    if (response.success) {
      localStorage.setItem('userData', JSON.stringify(data));
      setUserData(data);
      setOnboardingComplete(true);
    }
  } catch (error) {
    console.error("API failed, using localStorage:", error);
    localStorage.setItem('userData', JSON.stringify(data));
    setUserData(data);
    setOnboardingComplete(true);
  }
};

  const handleResetOnboarding = () => {
    localStorage.removeItem('userData');
    setUserData(null);
    setOnboardingComplete(false);
  };

  return (
    <div className="app">
      {onboardingComplete ? (
        <Dashboard 
          userData={userData} 
          onResetOnboarding={handleResetOnboarding}
        />
      ) : (
        <OnboardingWizard onComplete={handleOnboardingComplete} />
      )}
    </div>
  );
};

export default App;