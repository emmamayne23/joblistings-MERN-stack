import express from "express";
import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  getJob,
} from "../controllers/job.controller.js";

const router = express.Router();

// getting all the jobs from the database
router.get("/", getAllJobs);

// getting a single job from the database
router.get("/:id", getJob);

// creating a new job in the database
router.post("/", createJob);

// updating a job in the database
router.put("/:id", updateJob);

// deleting a job from the database
router.delete("/:id", deleteJob);

export default router;
