import React from 'react';
import { enrolledStudents } from '../../assets/assets';


function StudentsEnrolled() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Students Enrolled</h1>

      <div className="space-y-4">
        {enrolledStudents.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
                {student.studentName.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{student.studentName}</p>
                <p className="text-sm text-gray-500">{student.courseTitle}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">{student.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsEnrolled;
