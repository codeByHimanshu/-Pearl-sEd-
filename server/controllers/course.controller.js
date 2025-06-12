import express from "express";
import Course from "../models/Course.js";
import User from "../models/User.js";

const router = express.Router();

// Create new course
router.post("/create", async (req, res) => {
  try {
    const { title, description, thumbnail, price, instructor } = req.body;

    if (!title || !description || !thumbnail || !price || !instructor) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const instructorExists = await User.findById(instructor);
    if (!instructorExists) {
      return res.status(404).json({ error: "Instructor not found" });
    }

    const newCourse = new Course({
      title,
      description,
      thumbnail,
      price,
      instructor,
    });

    await newCourse.save();
    res.status(201).json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("instructor", "name email")
      .populate("lectures")
      .sort({ createdAt: -1 });
    res.status(200).json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get course by ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("instructor", "name email")
      .populate("lectures");

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a course
router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
