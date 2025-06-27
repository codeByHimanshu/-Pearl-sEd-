import Course from "../models/Course.js";
import Signup from "../models/UserSchema.js";




export const createCourse = async (req, res) => {
  // console.log("Creating course with body:", req.body);
  try {
    const { title, description, thumbnail, price } = req.body;
    const instructorId = req.user.userId;
    
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



export const getAllCoursesByInstructor = async (req, res) => {
  try {
    const instructorId = req.user.userId; 

 
    const instructor = await Signup.findById(instructorId);
    if (!instructor || instructor.role !== "mentor") {
      return res.status(403).json({ error: "Not authorized" });
    }

 
    const courses = await Course.find({ instructor: instructorId })
      .populate("instructor", "name email")
      .populate("lectures");

    res.status(200).json(courses);
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    res.status(500).json({ error: "Server error" });
  }
};

 

export const deleteCourse = async (req, res) => {
  try {
    const instructorId = req.user.userId;
    const instructor = await Signup.findById(instructorId);

    if (!instructor || instructor.role !== "mentor") {
      return res.status(403).json({ error: "Not authorized" });
    }

    const course = await Course.findOneAndDelete({ _id: req.params.id, instructor: instructorId });

    if (!course) {
      return res.status(404).json({ error: "Course not found or not authorized to delete" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Server error" });
  }
};
