import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';

function Courses() {
  const { courseData } = useContext(AppContext);
  console.log(courseData);
  

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white shadow-xl rounded-2xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Learn from Skilled Mentors</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Expand your knowledge with industry experts. Gain hands-on experience with courses designed to help you succeed in your career. Whether you're a beginner or a seasoned professional, there's something here for you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
  {courseData.slice(0, 4).map((course, index) => (
    <CourseCard key={index} course={course} />
  ))}
</div>


      <div className="text-center">
        <Link
          to="/course-list"
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Show All Courses →
        </Link>
      </div>
    </div>
  );
}

export default Courses;
