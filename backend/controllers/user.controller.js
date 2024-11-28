import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      message: "Successfully fetched all users",
      data: users,
    });
  } catch (error) {
    console.error(`Error fetching users: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  if (!user.username || !user.email || !user.password) {
    return res.status(400).json({
      status: "failed",
      message: "Please fill all the fields",
    });
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUser = new User({ ...user, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(`Error adding user: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: "failed",
      message: "Please fill all the fields",
    });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "failed",
        message: "Invalid password",
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({
      status: "success",
      message: "Login successful",
      token,
      user: {
        name: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(`Error loging in user: ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
