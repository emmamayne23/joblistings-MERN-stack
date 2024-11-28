import express from "express";
import { createUser, loginUser, getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/register", createUser);
router.post("/login", loginUser);

export default router;
