import Lecture from "../models/LectureSchema.js";
import Course from "../models/Course.js";


export const createLecture = async (req, res) => {
  try {
    const { title, description, videoUrl, duration, course, order, isFreePreview } = req.body;

    if (!title || !videoUrl || !duration || !course) {
      return res.status(400).json({ error: "Missing required fields" });
    }

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

    await Course.findByIdAndUpdate(course, {
      $push: { lectures: lecture._id },
    });

    res.status(201).json({ message: "Lecture created successfully", lecture });
  } catch (error) {
    console.error("Error creating lecture:", error);
    res.status(500).json({ error: "Server error" });
  }
};


export const getLecturesByCourse = async (req, res) => {
  try {
    const lectures = await Lecture.find({ course: req.params.courseId }).sort({ order: 1 });
    res.status(200).json(lectures);
  } catch (error) {
    console.error("Error fetching lectures:", error);
    res.status(500).json({ error: "Server error" });
  }
};


export const deleteLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndDelete(req.params.id);

    if (!lecture) {
      return res.status(404).json({ error: "Lecture not found" });
    }

    await Course.findByIdAndUpdate(lecture.course, {
      $pull: { lectures: lecture._id },
    });

    res.status(200).json({ message: "Lecture deleted successfully" });
  } catch (error) {
    console.error("Error deleting lecture:", error);
    res.status(500).json({ error: "Server error" });
  }
};
