/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
const JobListing = ({ job }) => {
  const [fullDescription, setFullDescription] = useState(false);

  let description = job.description;

  if (!fullDescription) {
    description = description.substring(0, 99) + "...";
  }

  return (
    <>
      <div>
        <div>
          <div>
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 shadow-lg w-11/12 p-6 rounded-xl my-4 mx-auto transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold text-gray-800">
                  {job.title}
                </div>
                <div className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium text-center">
                  {job.type}
                </div>
              </div>
              <hr className="border-gray-200 my-2" />
              <div className="text-gray-700 mb-4">{description}</div>
              <button
                onClick={() => setFullDescription((prevState) => !prevState)}
                className="text-primary hover:text-secondary underline font-medium mb-4"
              >
                {fullDescription ? "Less" : "More"}
              </button>
              <hr className="border-gray-200 my-2" />
              <div className="flex justify-between items-center text-sm text-gray-600 my-4">
                <div className="flex items-center">
                  <FaLocationDot className="text-red-500 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="font-medium text-green-600">
                  {job.salary} / Year
                </div>
              </div>
              <Link
                to={`/job/${job._id}`}
                className="block text-center bg-primary hover:bg-secondary text-white font-medium py-2.5 rounded-lg shadow-md transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
