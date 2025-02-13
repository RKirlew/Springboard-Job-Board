import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Homepage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import React from 'react';
import Dashboard from './Pages/Dashboard';
import PostJobPage from './Pages/PostJobPage';
import JobsPage from './Pages/JobsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/postjob" element={<PostJobPage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
