import React from 'react';

const UserInfoCard = ({ userData }) => {
  return (
    <div className="card user-info">
      <h3>Your Information</h3>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Company:</strong> {userData.companyName}</p>
      <p><strong>Industry:</strong> {userData.industry}</p>
    </div>
  );
};

export default UserInfoCard;