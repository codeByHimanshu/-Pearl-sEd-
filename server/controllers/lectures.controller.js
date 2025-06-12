import express from "express";
import Lecture from "../models/Lecture.js";
import Course from "../models/Course.js";

const router = express.Router();

// Create a new lecture
router.post("/create", async (req, res) => {
  try {
    const { title, description, videoUrl, duration, course, order, isFreePreview } = req.body;

    if (!title || !videoUrl || !duration || !course) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Optional: Check if the course exists
    const courseExists = await Course.findById(course);
    if (!courseExists) {
      return res.status(404).json({ error: "Course not found" });
    }

    const lecture = new Lecture({
      title,
      description,
      videoUrl,
      duration,
      course,
      order,
      isFreePreview,
    });

    await lecture.save();

    // Optional: Add the lecture to the course's lecture list
    await Course.findByIdAndUpdate(course, {
      $push: { lectures: lecture._id },
    });

    res.status(201).json({ message: "Lecture created successfully", lecture });
  } catch (error) {
    console.error("Error creating lecture:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all lectures for a course
router.get("/course/:courseId", async (req, res) => {
  try {
    const lectures = await Lecture.find({ course: req.params.courseId }).sort({ order: 1 });
    res.status(200).json(lectures);
  } catch (error) {
    console.error("Error fetching lectures:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a lecture by ID
router.delete("/:id", async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndDelete(req.params.id);

    if (!lecture) {
      return res.status(404).json({ error: "Lecture not found" });
    }

    // Optional: Remove lecture reference from course
    await Course.findByIdAndUpdate(lecture.course, {
      $pull: { lectures: lecture._id },
    });

    res.status(200).json({ message: "Lecture deleted successfully" });
  } catch (error) {
    console.error("Error deleting lecture:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
