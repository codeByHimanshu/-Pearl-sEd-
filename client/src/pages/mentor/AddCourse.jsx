import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { FaChevronDown, FaPlus, FaTrash, FaTimes } from "react-icons/fa";

function AddCourse() {
  const quilRef = useRef();
  const editorRef = useRef();
  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newLecture, setNewLecture] = useState({
    lecTitle: "",
    lecDuration: "",
    lecURL: "",
    isPreviewFree: false,
  });
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);

  useEffect(() => {
    if (!quilRef.current && editorRef.current) {
      quilRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write a detailed course description...",
      });
    }
  }, []);

  const handleAddChapter = () => {
    setChapters([
      ...chapters,
      { title: `Chapter ${chapters.length + 1}`, collapsed: false, chContent: [] },
    ]);
  };

  const handleToggleCollapse = (index) => {
    const updated = [...chapters];
    updated[index].collapsed = !updated[index].collapsed;
    setChapters(updated);
  };

  const handleAddLecture = (index) => {
    setSelectedChapterIndex(index);
    setShowPopup(true);
  };

  const handleSaveLecture = () => {
    const updatedChapters = [...chapters];
    updatedChapters[selectedChapterIndex].chContent.push(newLecture);
    setChapters(updatedChapters);
    setNewLecture({ lecTitle: "", lecDuration: "", lecURL: "", isPreviewFree: false });
    setShowPopup(false);
  };

  const handleDeleteLecture = (chapterIndex, lectureIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].chContent.splice(lectureIndex, 1);
    setChapters(updatedChapters);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Course</h1>

        <form className="space-y-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Course Title</label>
            <input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="E.g. Mastering React in 30 Days"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Course Description</label>
            <div ref={editorRef} className="h-48 bg-white border border-gray-300 rounded-xl p-2"></div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Course Price (₹)</label>
            <input
              type="number"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter price in INR"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Course Thumbnail</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-xl file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
            />
            {image && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Thumbnail Preview"
                  className="w-60 h-40 object-cover rounded-xl shadow"
                />
              </div>
            )}
          </div>

          {/* Chapters and Lectures */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Chapters</h3>
            {chapters.map((chapter, chIndex) => (
              <div key={chIndex} className="mb-4 border border-gray-300 rounded-lg p-3 bg-gray-50">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggleCollapse(chIndex)}
                >
                  <div className="flex items-center">
                    <FaChevronDown className={`transition-transform duration-300 ${chapter.collapsed ? "-rotate-90" : ""}`} />
                    <span className="ml-2 font-medium">{chIndex + 1}. {chapter.title}</span>
                  </div>
                  <span className="text-sm text-gray-600">{chapter.chContent.length} lectures</span>
                </div>

                {!chapter.collapsed && (
                  <div className="mt-3 space-y-2">
                    {chapter.chContent.map((lecture, lecIndex) => (
                      <div key={lecIndex} className="flex items-center justify-between text-sm bg-white p-2 rounded shadow-sm">
                        <span>
                          {lecIndex + 1}. {lecture.lecTitle} – {lecture.lecDuration} mins – <a className="text-blue-600" href={lecture.lecURL} target="_blank" rel="noreferrer">Link</a> – {lecture.isPreviewFree ? "Free Preview" : "Paid"}
                        </span>
                        <FaTimes
                          onClick={() => handleDeleteLecture(chIndex, lecIndex)}
                          className="text-red-500 cursor-pointer"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleAddLecture(chIndex)}
                      className="text-sm mt-2 text-blue-600 flex items-center"
                    >
                      <FaPlus className="mr-1" /> Add Lecture
                    </button>
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddChapter}
              className="mt-2 flex items-center text-green-600"
            >
              <FaPlus className="mr-1" /> Add Chapter
            </button>
          </div>

          {/* Popup for adding lecture */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg space-y-4">
                <h2 className="text-xl font-semibold">Add Lecture</h2>
                <input
                  type="text"
                  placeholder="Lecture Title"
                  value={newLecture.lecTitle}
                  onChange={(e) => setNewLecture({ ...newLecture, lecTitle: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Duration (mins)"
                  value={newLecture.lecDuration}
                  onChange={(e) => setNewLecture({ ...newLecture, lecDuration: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Video URL"
                  value={newLecture.lecURL}
                  onChange={(e) => setNewLecture({ ...newLecture, lecURL: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <label className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    checked={newLecture.isPreviewFree}
                    onChange={(e) => setNewLecture({ ...newLecture, isPreviewFree: e.target.checked })}
                  />
                  <span>Free Preview</span>
                </label>
                <div className="flex justify-end space-x-3">
                  <button onClick={() => setShowPopup(false)} className="text-gray-600">Cancel</button>
                  <button onClick={handleSaveLecture} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add</button>
                </div>
              </div>
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Save Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;
