import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';

function MyCourses() {
  const { courseData } = useContext(AppContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courseData);
  }, []); 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4 bg-white">
            <img
              src={course.thumbnail}
              alt={course.courseTitle}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{course.courseTitle}</h2>
            {course.courseDuration && (
              <p className="text-sm text-gray-600 mt-1">Duration: {course.courseDuration}</p>
            )}
            {course.courseRating && (
              <p className="text-sm text-yellow-600 mt-1">Rating: ⭐ {course.courseRating}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;
