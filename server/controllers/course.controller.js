import Course from "../models/Course.js";
import Signup from "../models/UserSchema.js";

export const createCourse = async (req, res) => {
  console.log("Creating course with body:", req.body);
  console.log("user = ",req.user);
  try {
    const { title, description, thumbnail, price } = req.body;
    const instructorId = req.user.id;
    console.log("req user = ",req.user);
    console.log("Instructor ID:", instructorId);
    if (!title || !description || !thumbnail || !price) {
      return res.status(400).json({ error: "Missing required fields" });
    }
     
    const instructorExists = await Signup.findById(instructorId);
    console.log("insturctor exist = ",instructorExists.role);
    if (!instructorExists || instructorExists.role !== "mentor") {
      return res.status(403).json({ error: "Instructor not authorized" });
    }

    const newCourse = new Course({
      title,
      description,
      thumbnail,
      price,
      instructor: instructorId,
    });

    await newCourse.save();

    res.status(201).json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Controller to get all courses
export const getAllCourses = async (req, res) => {
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
};

// Controller to get a course by ID
export const getCourseById = async (req, res) => {
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
};

// Controller to delete a course
export const deleteCourse = async (req, res) => {
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
};
