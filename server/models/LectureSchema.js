import mongoose from "mongoose";

const LectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Lecture title is required"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  videoUrl: {
    type: String,
    required: [true, "Video URL is required"],
  },
  duration: {
    type: Number, 
    required: [true, "Duration is required"],
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  order: {
    type: Number,
    required: true,
    default: 1,
  },
  isFreePreview: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Lecture", LectureSchema);
