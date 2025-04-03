import React from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Learn from Skilled Mentors</h1>
      <p className="text-gray-600 leading-relaxed mb-6">
        Expand your knowledge with industry experts. Gain hands-on experience with courses designed to help you succeed in your career. Whether you are a beginner or an experienced professional, we have something for you.
      </p>

      <Link 
        to="/course-list" 
        className="inline-block bg-blue-600 text-white py-2 px-5 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
      >
        Show All Courses →
      </Link>
    </div>
  );
}

export default Courses;
