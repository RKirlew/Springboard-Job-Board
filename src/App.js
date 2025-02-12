import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({ title: '', description: '', company: '', location: '' });

  useEffect(() => {
    axios.get('http://localhost:8080/api/jobs').then((response) => setJobs(response.data));
  }, []);

  const createJob = () => {
    axios.post('http://localhost:8080/api/jobs', newJob).then(() => {
      setJobs([...jobs, newJob]);
      setNewJob({ title: '', description: '', company: '', location: '' });
    });
  };

  const deleteJob = (id) => {
    axios.delete(`http://localhost:8080/api/jobs/${id}`).then(() => {
      setJobs(jobs.filter((job) => job.id !== id));
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Job Board</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Job Title"
          value={newJob.title}
          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Company"
          value={newJob.company}
          onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={newJob.location}
          onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={createJob} className="bg-blue-500 text-white p-2">Add Job</button>
      </div>

      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="border p-4 mb-2">
            <h2 className="font-bold">{job.title}</h2>
            <p>{job.company} - {job.location}</p>
            <button onClick={() => deleteJob(job.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
