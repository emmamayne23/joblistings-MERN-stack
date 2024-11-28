import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import API_URL from "../constants/constant";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobById = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/jobs/${id}`);
        console.log(response.data.data);
        setJob(response.data.data);
      } catch (error) {
        console.error("Error fetching the job", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobById();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-secondary">{loading ? "Loading..." : job.title}</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-green-600">Job Type: <span className=" text-green-600 font-medium">{job.type}</span></h2>
            <h3 className="text-lg font-semibold text-green-600">Location: <span className="font-medium text-blue-600">{job.location}</span></h3>
            <p className="text-gray-700 mt-2 font-medium">{job.description}</p>
            <p className="text-lg font-semibold mt-4 text-green-600">Salary: <span className="font-medium text-red-600">{job.salary}</span></p>
          </div>

          <div className="border-t border-gray-300 mt-4 pt-4 space-y-2">
            <h4 className="text-lg font-semibold text-green-600">Company Details:</h4>
            <p><strong className="text-purple-600">Name:</strong> <span className="font-medium">{job.details.company_name}</span></p>
            <p><strong className="text-purple-600">Email:</strong> <span className="font-medium">{job.details.company_email}</span></p>
            <p><strong className="text-purple-600">Phone:</strong> <span className="font-medium">{job.details.company_phone}</span></p>
            <p><strong className="text-purple-600">Website:</strong> <a href={job.details.company_website} className="text-blue-500 hover:underline font-medium">{job.details.company_website}</a></p>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-green-600">Detailed Description:</h4>
            <p className="text-gray-700 font-medium">{job.details.detailed_description}</p>
          </div>

          <div className="mt-6">
            <Link to="/" className="inline-block bg-secondary text-white font-semibold py-2 px-4 rounded hover:bg-primary transition duration-300">
              Apply for Job
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPage;
