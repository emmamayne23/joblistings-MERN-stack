import mongoose from "mongoose";

const jobData = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    details: {
      company_name: {
        type: String,
        required: true,
      },
      detailed_description: {
        type: String,
        required: true,
      },
      company_email: {
        type: String,
        required: true,
      },
      company_phone: {
        type: String,
        required: true,
      },
      company_website: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobData);

export default Job;
