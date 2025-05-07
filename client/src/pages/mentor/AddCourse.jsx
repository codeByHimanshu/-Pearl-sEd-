import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function AddCourse() {
  const quilRef = useRef();
  const editorRef = useRef();
  const [courseTitle, setCourseTitle] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!quilRef.current && editorRef.current) {
      quilRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write a detailed course description...",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
           Add a New Course
        </h1>

        <form className="space-y-6">
  
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Course Title
            </label>
            <input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="E.g. Mastering React in 30 Days"
            />
          </div>

        
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Course Description
            </label>
            <div
              ref={editorRef}
              className="h-48 bg-white border border-gray-300 rounded-xl p-2"
            ></div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Course Price (₹)
            </label>
            <input
              type="number"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              placeholder="Enter price in INR"
            />
          </div>

   
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Course Thumbnail
            </label>
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
