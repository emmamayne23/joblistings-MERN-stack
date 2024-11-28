/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import SkeletonJobCard from "./SkeletonJobCard";
import JobListing from "./JobListing";
import API_URL from "../constants/constant";

const JobListings = ({ limit = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/jobs`);
        setJobs(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching the jobs", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // Only fetch jobs once on component mount

  // Filter jobs based on the search term
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limit the number of jobs if a limit is provided
  const limitedJobs = limit ? filteredJobs.slice(0, 6) : filteredJobs;

  return (
    <>
      <div>
        {limit ? (
          <div className="bg-gradient-to-r from-primary to-secondary shadow-lg w-11/12 p-6 rounded-xl my-4 mx-auto transform transition-all hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-center my-5 text-white">
              Latest Jobs
            </h2>
          </div>
        ) : (
          <div>
            <div className="bg-gradient-to-r from-primary to-secondary shadow-lg w-11/12 p-6 rounded-xl my-4 mx-auto transform transition-all hover:shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-center my-5 text-white">
                Browse Jobs
              </h2>
            </div>

            <div className="grid place-items-center p-5">
              <input
                type="search"
                className="border rounded-md p-2 max-w-lg w-10/12 mx-auto ring ring-primary focus:ring focus:ring-secondary focus:outline-none focus:ring-offset-2"
                placeholder="Search for jobs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className="border grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading
            ? Array.from({ length: limit ? 6 : 12 }).map((_, index) => (
                <SkeletonJobCard key={index} />
              ))
            : limitedJobs.map((job) => <JobListing key={job._id} job={job} />)}
        </div>
      </div>
    </>
  );
};

export default JobListings;
