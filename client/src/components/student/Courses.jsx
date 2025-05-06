import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';

function Courses() {
  const { courseData } = useContext(AppContext);

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-4 animate__animated animate__fadeInDown">
          Learn from Skilled Mentors
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto animate__animated animate__fadeInUp">
          Expand your knowledge with industry experts. Get hands-on with practical courses tailored to real-world skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {courseData.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/course-list"
          className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md"
        >
          Show All Courses →
        </Link>
      </div>
    </div>
  );
}

export default Courses;
