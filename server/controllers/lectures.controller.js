import Lecture from "../models/LectureSchema.js";
import Course from "../models/Course.js";

export const createLecture = async (req, res) => {
  try {
    const {
      title,
      description,
      videoUrl,
      duration,
      order,
      isFreePreview,
      courseTitle,
    } = req.body;

    if (!title || !videoUrl || !duration || !courseTitle) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Find course by title
    const course = await Course.findOne({ title: courseTitle });

    if (!course) {
      return res.status(404).json({ error: "Course with given title not found" });
    }

    const newLecture = new Lecture({
      title,
      description,
      videoUrl,
      duration,
      course: course._id,
      order,
      isFreePreview,
    });

    await newLecture.save();

    // Add lecture to course
    course.lectures.push(newLecture._id);
    await course.save();

    res.status(201).json({
      message: "Lecture created and added to course",
      lecture: newLecture,
      courseId: course._id,
    });
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
