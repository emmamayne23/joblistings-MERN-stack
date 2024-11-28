import { useState } from "react";
import axios from "axios";
import API_URL from "../constants/constant";

const AddJobForm = () => {
  const [newJob, setNewJob] = useState({
    title: "",
    type: "",
    description: "",
    salary: "",
    location: "",
    details: {
      company_name: "",
      detailed_description: "",
      company_email: "",
      company_phone: "",
      company_website: "",
    },
  });

  const [notification, setNotification] = useState({
    message: "",
    visible: false,
    type: "", // "success" or "error"
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/jobs`, newJob, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Job added successfully:", response.data);

      // Reset form
      setNewJob({
        title: "",
        type: "",
        description: "",
        salary: "",
        location: "",
        details: {
          company_name: "",
          detailed_description: "",
          company_email: "",
          company_phone: "",
          company_website: "",
        },
      });

      // Show success notification
      setNotification({
        message: "Job added successfully! View it on the homepage.",
        visible: true,
        type: "success",
      });
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error adding job:", error.message);

      // Show error notification
      setNotification({
        message: "Error adding job. Please try again.",
        visible: true,
        type: "error",
      });
      window.scrollTo(0, 0);
    }

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ message: "", visible: false, type: "" });
    }, 3000);
  };

  return (
    <>
    {notification.visible && (
      <div
        className={`fixed top-0 left-0 w-full p-4 text-center text-white transition-transform duration-500 ${
          notification.type === "success" ? "bg-green-500" : "bg-red-500"
        }`}
        style={{ transform: notification.visible ? "translateY(0)" : "translateY(-100%)" }}
      >
        {notification.message}
      </div>
    )}
      <div className="text-center mt-10 text-3xl font-bold text-secondary">
        Add Job
      </div>
      <div className="container mx-auto p-6">
        <form
          onSubmit={handleFormSubmit}
          className="bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
          {/* Title and Type */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={newJob.title}
                onChange={(e) =>
                  setNewJob({ ...newJob, title: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter job title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Type
              </label>
              <input
                type="text"
                id="type"
                value={newJob.type}
                onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter job type"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              value={newJob.description} // Added value
              onChange={(e) =>
                setNewJob({ ...newJob, description: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter job description"
              required
            ></textarea>
          </div>

          {/* Salary and Location */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="salary"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Salary
              </label>
              <input
                type="text"
                id="salary"
                value={newJob.salary}
                onChange={(e) =>
                  setNewJob({ ...newJob, salary: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter salary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                value={newJob.location}
                onChange={(e) =>
                  setNewJob({ ...newJob, location: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter location"
                required
              />
            </div>
          </div>

          {/* Company Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company_name"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company_name"
                value={newJob.details.company_name}
                onChange={(e) =>
                  setNewJob((prevState) => ({
                    ...prevState,
                    details: {
                      ...prevState.details,
                      company_name: e.target.value,
                    },
                  }))
                }
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company_email"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Company Email
              </label>
              <input
                type="email"
                id="company_email"
                value={newJob.details.company_email}
                onChange={(e) =>
                  setNewJob((prevState) => ({
                    ...prevState,
                    details: {
                      ...prevState.details,
                      company_email: e.target.value,
                    },
                  }))
                }
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company email"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company_phone"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Company Phone
              </label>
              <input
                type="tel"
                id="company_phone"
                value={newJob.details.company_phone}
                onChange={(e) =>
                  setNewJob((prevState) => ({
                    ...prevState,
                    details: {
                      ...prevState.details,
                      company_phone: e.target.value,
                    },
                  }))
                }
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company phone"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company_website"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Company Website
              </label>
              <input
                type="url"
                id="company_website"
                value={newJob.details.company_website}
                onChange={(e) =>
                  setNewJob((prevState) => ({
                    ...prevState,
                    details: {
                      ...prevState.details,
                      company_website: e.target.value,
                    },
                  }))
                }
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company website"
                required
              />
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <label
              htmlFor="detailed_description"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Detailed Description
            </label>
            <textarea
              id="detailed_description"
              rows="6"
              value={newJob.details.detailed_description}
              onChange={(e) =>
                setNewJob((prevState) => ({
                  ...prevState,
                  details: {
                    ...prevState.details,
                    detailed_description: e.target.value,
                  },
                }))
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter detailed job description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-secondary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary transition duration-300"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJobForm;
