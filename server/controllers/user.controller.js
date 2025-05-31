import jwt from "jsonwebtoken";

import Signup from "../models/UserSchema.js";

export const signup = async (req, res) => {
  console.log("Signup request received:", req.body);
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = new Signup({ name, email, password, role });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const signin = async (req, res) => {
  console.log("Signin request received:", req.body);
  try {
    const { email, password } = req.body;

    const user = await Signup.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || "12345678",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
