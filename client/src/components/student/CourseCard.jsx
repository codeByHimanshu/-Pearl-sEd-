import React, { useContext } from 'react';

import { dummyCourses } from '../../assets/assets';
import { AppContextPrtovider } from '../../context/AppContext';

function CourseCard() {
  const currency = useContext(AppContextPrtovider)
  const course = dummyCourses[0]; // Assuming you want to show the first course

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src="https://i.ytimg.com/vi/vx5dSS3BBOk/maxresdefault.jpg" alt="Course Thumbnail" className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{course.title}</h2>
        <p className="text-gray-600 text-sm mb-2">By {course.mentor}</p>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <p className="text-yellow-500 font-medium">4.5</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src=""
                  alt="*"
                  className="w-4 h-4"
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500">223 students</p>
        </div>

        <p className="text-lg font-bold">{currency} 1000</p>
      </div>
    </div>
  );
}

export default CourseCard;
