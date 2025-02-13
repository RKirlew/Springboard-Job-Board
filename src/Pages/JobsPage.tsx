import React, { useEffect, useState } from "react";
import axios from "axios";

const JobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]); // Store jobs in state
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/jobs");
        setJobs(response.data); // Set the fetched jobs to state
        setLoading(false); // Set loading to false
      } catch (err: any) {
        setError("Failed to fetch jobs");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-lg font-semibold text-gray-700 animate-pulse">
          Loading jobs...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-lg font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        Available Job Opportunities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 space-y-4"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
            <p className="text-gray-600">{job.description}</p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Company:</span> {job.company}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Date Posted:</span>{" "}
                {new Date(job.datePosted).toLocaleDateString()}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200">
                Apply Now
              </button>
              <span className="text-sm text-gray-500">#Job</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
