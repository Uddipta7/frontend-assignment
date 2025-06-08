import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import '../../styles.css';

// Mock API service (could be moved to separate file)
const api = {
  getDashboardStats: () => new Promise(resolve => {
    setTimeout(() => {
      resolve({
        teamMembers: 12,
        activeProjects: 5,
        notifications: 3
      });
    }, 500);
  })
};

const Dashboard = ({ userData, onResetOnboarding }) => {
  const [stats, setStats] = useState({ 
    teamMembers: 0, 
    activeProjects: 0, 
    notifications: 0 
  });
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [error, setError] = useState(null);

  // Fetch all data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsData, chartData] = await Promise.all([
        api.getDashboardStats(),
        // Mock chart data
        new Promise(resolve => resolve([
          { name: 'Mon', value: 20 },
          { name: 'Tue', value: 45 },
          { name: 'Wed', value: 28 },
          { name: 'Thu', value: 80 },
          { name: 'Fri', value: 50 }
        ]))
      ]);
      
      setStats(statsData);
      setChartData(chartData);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
      // Fallback data
      setStats({
        teamMembers: 12,
        activeProjects: 5,
        notifications: 3
      });
    } finally {
      setLoading(false);
    }
  };

  // Initial data load
  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  if (loading && !chartData.length) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  return (
    <div className={`dashboard-container ${userData?.theme || 'light'}-theme`}>
      <div className="dashboard-header">
        <div>
          <h1>Welcome, {userData?.name || 'User'}</h1>
          <div className="dashboard-actions">
            <button 
              onClick={onResetOnboarding}
              className="dashboard-btn view-onboarding-btn"
              disabled={loading}
            >
              <span className="icon">↻</span>
              {loading ? 'Loading...' : 'View Onboarding Again'}
            </button>
            <button 
              onClick={handleRefresh}
              className="dashboard-btn refresh-data-btn"
              disabled={loading}
            >
              <span className="icon">🔄</span>
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
          </div>
        </div>
      </div>


      {error && (
        <div className="error-alert">
          ⚠️ Couldn't load latest data. Showing cached information.
        </div>
      )}

      <div className={`dashboard-grid ${userData?.dashboardLayout || 'standard'}-layout`}>
        {/* User Info Card */}
        <div className="card user-info">
          <h3>Your Profile</h3>
          <div className="profile-details">
            <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
            <p><strong>Company:</strong> {userData?.companyName || 'N/A'}</p>
            <p><strong>Industry:</strong> {userData?.industry || 'N/A'}</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="card stat-card">
          <h3>Team Members</h3>
          <div className="stat-value">{stats.teamMembers}</div>
          <p className="stat-label">Active members</p>
        </div>

        <div className="card stat-card">
          <h3>Active Projects</h3>
          <div className="stat-value">{stats.activeProjects}</div>
          <p className="stat-label">In progress</p>
        </div>

        <div className="card stat-card">
          <h3>Notifications</h3>
          <div className="stat-value">{stats.notifications}</div>
          <p className="stat-label">Unread messages</p>
        </div>

        {/* Chart Card */}
        <div className="card chart-card">
          <div className="chart-header">
            <h3>Weekly Progress</h3>
            <span className="update-time">
              Updated: {lastUpdated.toLocaleTimeString()}
            </span>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: userData?.theme === 'dark' ? '#fff' : '#666' }}
                />
                <YAxis 
                  tick={{ fill: userData?.theme === 'dark' ? '#fff' : '#666' }}
                />
                <Tooltip 
                  contentStyle={{
                    background: userData?.theme === 'dark' ? '#333' : '#fff',
                    borderColor: '#4CAF50',
                    color: userData?.theme === 'dark' ? '#fff' : '#333',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="value" 
                  name="Completion %"
                  fill="#4CAF50"
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;