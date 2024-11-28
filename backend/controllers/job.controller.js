import Job from "../models/jobs.model.js";
import mongoose from "mongoose";

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res
      .status(200)
      .json({
        status: "success",
        message: "Successfully fetched jobs",
        data: jobs,
      });
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Job not found" });
  }
  try {
    const job = await Job.findById(id)
    res.status(200).json({
      status: "success",
      message: "Successfully fetched job",
      data: job,
    });
  } catch (error) {
    console.error("Error fetching job:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const createJob = async (req, res) => {
  const job = req.body;

  if (
    !job.title ||
    !job.type ||
    !job.description || 
    !job.location ||
    !job.salary ||
    !job.details.company_name ||
    !job.details.detailed_description ||
    !job.details.company_email ||
    !job.details.company_phone ||
    !job.details.company_website
  ) {
    return res.status(400).json({ error: "Please fill all the fields" });
  }

  const newJob = new Job(job);

  try {
    await newJob.save();
    res
      .status(201)
      .json({
        status: "success",
        message: "Job created successfully",
        data: newJob,
      });
  } catch (error) {
    console.error("Error creating job:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const job = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Job not found" });
  }
  try {
    const updatedJob = await Job.findByIdAndUpdate(id, job, { new: true });
    res
      .status(200)
      .json({
        status: "success",
        message: "Job updated successfully",
        data: updatedJob,
      });
  } catch (error) {
    console.error("Error updating job:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Job not found" });
  }
  try {
    await Job.findByIdAndDelete(id);
    res
      .status(200)
      .json({ status: "success", message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
