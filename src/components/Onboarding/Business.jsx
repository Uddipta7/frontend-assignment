import React from 'react';

const Business = ({ data, onChange }) => {
  return (
    <div className="form-step">
      <h2>Business Information</h2>
      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={data.companyName}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="industry">Industry</label>
        <input
          type="text"
          id="industry"
          name="industry"
          value={data.industry}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="companySize">Company Size</label>
        <select
          id="companySize"
          name="companySize"
          value={data.companySize}
          onChange={onChange}
          required
        >
          <option value="">Select size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="501+">501+ employees</option>
        </select>
      </div>
    </div>
  );
};

export default Business;