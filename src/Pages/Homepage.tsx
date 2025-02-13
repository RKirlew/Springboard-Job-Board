import React from "react";
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      {/* Hero Section */}
      <div className="text-center bg-blue-100 p-10 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to Springboard</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your go-to platform for finding the best jobs and talents.
        </p>
        <div className="mt-6">
        <Link to="/jobs"><button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Browse Jobs
          </button>
          </Link>
           <Link to="/postjob"> <button className="ml-4 bg-gray-100 text-blue-600 py-2 px-6 rounded-lg hover:bg-gray-200 transition">
            Post a Job
          </button>
          </Link>
        </div>
      </div>

      {/* Job Categories Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center">Explore Job Categories</h2>
        <p className="mt-2 text-center text-gray-600">
          Find jobs in different industries and roles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Software Engineering</h3>
            <p className="mt-2 text-gray-600">
              Full-stack, front-end, back-end, and more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Marketing & Sales</h3>
            <p className="mt-2 text-gray-600">
              Digital marketing, growth strategy, and sales.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Design & UX</h3>
            <p className="mt-2 text-gray-600">
              UI/UX design, graphic design, and product design.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gray-100 p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-blue-600">Join Springboard Today</h2>
        <p className="mt-4 text-gray-700">
          Create an account and take your next step in your career.
        </p>
        <button className="mt-6 bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Homepage;
