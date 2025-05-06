import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  const { currency } = useContext(AppContext);

  return (
    <Link
      to={`/course-detail/${course.id}`}
      onClick={() => scrollTo(0, 0)}
      className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-indigo-100"
    >
      <img
        src={course.thumbnail}
        alt="Course Thumbnail"
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-indigo-800 mb-1">{course.courseTitle}</h2>
        <p className="text-sm text-gray-600 mb-3">By <span className="font-medium">{course.mentor}</span></p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <p className="text-yellow-500 font-semibold">{course.courseratings}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 fill-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.284L12 19.896l-7.42 3.984L6 15.596 0 9.748l8.332-1.73z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500">{course.enrolledStudents?.length || 0} students</p>
        </div>

        <div className="text-lg text-indigo-700 font-extrabold">
          {currency} {course.coursePrice}
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
