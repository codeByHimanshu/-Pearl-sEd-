import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  const { currency } = useContext(AppContext);


  const rating = Number(course.courseratings) || 0;
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  return (
    <Link
      to={`/course-detail/${course.id}`}
      onClick={() => scrollTo(0, 0)}
      className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-indigo-100 group"
    >
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.courseTitle || "Course Thumbnail"}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {course.isFeatured && (
          <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded shadow">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-indigo-800 mb-1 line-clamp-2">{course.courseTitle}</h2>
        <p className="text-sm text-gray-600 mb-3">
          By <span className="font-medium">{course.mentor}</span>
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <p className="text-yellow-500 font-semibold">{rating.toFixed(1)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => {
                if (i < fullStars) {
                  return (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.284L12 19.896l-7.42 3.984L6 15.596 0 9.748l8.332-1.73z" />
                    </svg>
                  );
                }
                if (i === fullStars && halfStar) {
                  return (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id={`half-grad-${course.id}`} x1="0" x2="1" y1="0" y2="0">
                          <stop offset="50%" stopColor="#facc15" />
                          <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <path
                        fill={`url(#half-grad-${course.id})`}
                        d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.284L12 19.896l-7.42 3.984L6 15.596 0 9.748l8.332-1.73z"
                      />
                    </svg>
                  );
                }
                return (
                  <svg key={i} className="w-4 h-4 fill-gray-200" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 1.42 8.284L12 19.896l-7.42 3.984L6 15.596 0 9.748l8.332-1.73z" />
                  </svg>
                );
              })}
            </div>
          </div>
          <p className="text-xs text-gray-500">
            {course.enrolledStudents?.length || 0} students
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-lg text-indigo-700 font-extrabold">
            {currency} {course.coursePrice}
          </div>
          {course.category && (
            <span className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded font-semibold">
              {course.category}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
