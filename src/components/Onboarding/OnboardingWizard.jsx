import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Step1Personal from './Personal';
import Step2Business from './Business';
import Step3Preferences from './Preferences';
import '../../styles.css';

const OnboardingWizard = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    industry: '',
    companySize: '',
    theme: 'light',
    dashboardLayout: 'standard'
  });
  const [stepErrors, setStepErrors] = useState({});

  const validateCurrentStep = () => {
    let isValid = true;
    const errors = {};

    switch(currentStep) {
      case 1:
        if (!formData.name.trim()) {
          errors.name = "Name is required";
          isValid = false;
        }
        if (!formData.email.trim()) {
          errors.email = "Email is required";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = "Invalid email format";
          isValid = false;
        }
        break;
      case 2:
        if (!formData.companyName.trim()) {
          errors.companyName = "Company name is required";
          isValid = false;
        }
        if (!formData.industry.trim()) {
          errors.industry = "Industry is required";
          isValid = false;
        }
        if (!formData.companySize) {
          errors.companySize = "Please select company size";
          isValid = false;
        }
        break;
      case 3:
        // Preferences step typically doesn't need validation
        break;
      default:
        break;
    }

    setStepErrors(errors);
    return isValid;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
      setStepErrors({});
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    setStepErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (stepErrors[name]) {
      setStepErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      localStorage.setItem('userData', JSON.stringify(formData));
      onComplete(formData);
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return <Step1Personal data={formData} onChange={handleChange} errors={stepErrors} />;
      case 2:
        return <Step2Business data={formData} onChange={handleChange} errors={stepErrors} />;
      case 3:
        return <Step3Preferences data={formData} onChange={handleChange} errors={stepErrors} />;
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-container">
      <ProgressBar currentStep={currentStep} />
      {renderStep()}
      <div className="button-group">
        {currentStep > 1 && (
          <button className="btn back-btn" onClick={prevStep}>Back</button>
        )}
        {currentStep < 3 ? (
          <button className="btn next-btn" onClick={nextStep}>Next</button>
        ) : (
          <button className="btn submit-btn" onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default OnboardingWizard;