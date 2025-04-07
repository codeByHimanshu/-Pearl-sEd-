import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function CourseCard({ course }) {
  const { currency } = useContext(AppContext);


  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={course.courseThumbnail}
        alt="Course Thumbnail"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{course.courseTitle}</h2>
        <p className="text-gray-600 text-sm mb-2">By {course.mentor}</p>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <p className="text-yellow-500 font-medium">{course.courseratings}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.284L12 19.896l-7.42 3.984L6 15.596 0 9.748l8.332-1.73z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {course.enrolledStudents?.length || 0} students
          </p>
        </div>

        <p className="text-lg font-bold">
          {currency} {course.coursePrice}
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
