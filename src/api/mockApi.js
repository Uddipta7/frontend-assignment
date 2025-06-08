export const api = {
  saveUserData: (data) => mockDelay({ success: true, data }),
  getUserData: () => mockDelay({ /* sample response */ }),
  getDashboardStats: () => mockDelay({ 
    teamMembers: 12, 
    activeProjects: 5, 
    notifications: 3 
  })
};

function mockDelay(response) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Mock API:", response);
      resolve(response);
    }, 500);
  });
}