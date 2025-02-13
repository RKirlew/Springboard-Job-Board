import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isPostPage = location.pathname === '/postjob';
  const isJobsPage = location.pathname === '/jobs';
  const navigate = useNavigate();
  

  const handleLogout = () => {
    localStorage.removeItem('userEmail'); // Clear user session
    navigate('/login'); // Redirect to login page
  };
  
  return (
    <nav className="bg-blue-600 p-4 text-white">
      {isDashboard || isPostPage ? (
        <div className="flex justify-between items-center space-x-4 ">
          {isPostPage?(<h1 className=" text-xl font-bold">Springboard - Post Job</h1>):<h1 className="text-lg font-bold">Dashboard</h1>}
          <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline  mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-purple-500">
            Back to Home
          </Link>
          <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-purple-500"
      >
        Logout
      </button>
        </div>
        </div>
      ) : (
        <div className="flex justify-between">
         <Link to="/"> <h1 className="text-lg font-bold">Springboard</h1></Link>
          <div>
            <Link to="/" className="mr-4 hover:underline">
              Home
            </Link>
            <Link to="/login" className="mr-4 hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
