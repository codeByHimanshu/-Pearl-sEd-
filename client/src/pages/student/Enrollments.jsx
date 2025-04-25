import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {useNavigate } from 'react-router-dom'

function Enrollments() {
  const navigate = useNavigate()
  
  const {enrolled} = useContext(AppContext)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8 animate__animated animate__fadeIn">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center"> My Enrollments</h1>

      <div className="overflow-x-auto shadow-lg rounded-xl bg-white p-4">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-100 text-blue-800 text-sm uppercase">
              <th className="p-4">Course</th>
              <th className="p-4">Duration</th>
              <th className="p-4">Completed</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((course, index) => (
              <tr
                key={index}
                className="hover:bg-blue-50 transition duration-200 border-b"
              >
                <td className="flex items-center gap-3 p-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-12 h-12 rounded-md shadow-md"
                  />
                  <span className="font-medium text-gray-800">{course.courseTitle}</span>
                </td>
                <td className="p-4 text-gray-700">40h</td>
                <td className="p-4 text-gray-700">30 %</td>
                <td className="p-4">
                  <span 
                  onClick={()=>navigate('/media-player/' + course.id)}
                    className={` cursor-pointer px-3 py-1 text-xs font-semibold rounded-full ${
                      course.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    continue
                    {course.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Enrollments;
