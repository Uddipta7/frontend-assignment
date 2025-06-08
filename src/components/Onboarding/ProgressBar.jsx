import React from 'react';
import '../../styles.css';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="progress-container">
      <div className="steps-wrapper">
        <div className="progress-line">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          ></div>
        </div>
        {[1, 2, 3].map((step) => (
          <div key={step} className="step-group">
            <div className={`step-number ${step <= currentStep ? 'active' : ''}`}>
              {step}
            </div>
            <div className={`step-label ${step <= currentStep ? 'active' : ''}`}>
              STEP {step}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;