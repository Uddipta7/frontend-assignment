import React from 'react';

const Preferences = ({ data, onChange }) => {
  const handleThemeChange = (e) => {
    onChange({
      target: {
        name: 'theme',
        value: e.target.value
      }
    });
  };

  return (
    <div className="form-step">
      <h2>Preferences</h2>
      
      <div className="preference-box">
        <h3>Theme Settings</h3>
        <div className="theme-options">
          <label className="theme-option">
            <input
              type="checkbox"
              name="theme"
              value="light"
              checked={data.theme === 'light'}
              onChange={handleThemeChange}
              className="theme-checkbox"
            />
            <span className="checkmark"></span>
            Light Mode
          </label>
          
          <label className="theme-option">
            <input
              type="checkbox"
              name="theme"
              value="dark"
              checked={data.theme === 'dark'}
              onChange={handleThemeChange}
              className="theme-checkbox"
            />
            <span className="checkmark"></span>
            Dark Mode
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="dashboardLayout">Default Dashboard Layout</label>
        <select
          id="dashboardLayout"
          name="dashboardLayout"
          value={data.dashboardLayout}
          onChange={onChange}
        >
          <option value="standard">Balanced</option>
          <option value="compact">Condensed</option>
          <option value="detailed">Expanded</option>
        </select>
      </div>
    </div>
  );
};

export default Preferences;