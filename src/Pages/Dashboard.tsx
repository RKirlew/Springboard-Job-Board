import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem('userEmail'); // Retrieve user email
  const userRole = localStorage.getItem('userRole');
  const handleLogout = () => {
    localStorage.removeItem('userEmail'); // Clear user session
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="container mx-auto  bg-gray-100">
      <h1 className="p-4 text-3xl font-bold">Welcome to your Dashboard</h1>
      <p className="mt-4 p-4">Logged in as: <strong>{email}</strong></p>
      <p className='p-4'>Your role: <strong>{userRole}</strong></p>

    </div>
  );
};

export default Dashboard;
