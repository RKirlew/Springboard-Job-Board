import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostJobPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail') || ''); // Assume user is logged in
  const email = localStorage.getItem('userEmail'); // Retrieve user email
  const navigate = useNavigate();
  useEffect(() => {
    if (!userEmail) {
      alert("Must be logged in to post a job!");
      localStorage.removeItem('userEmail'); // Clear user session
      navigate('/login', { state: { from: '/postjob' } });
    }
  }, [userEmail, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/jobs/post', {
        title,
        description,
        company,
        location,
        userEmail,
      });
      console.log('Job posted successfully:', response.data);
      alert("Job posted successfully");
      navigate('/jobs');
      // Optionally, redirect the user or clear the form
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">Post a Job</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 max-w-lg mx-auto">
        <div>
          <label className="block text-sm font-medium">Job Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Job Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJobPage;
