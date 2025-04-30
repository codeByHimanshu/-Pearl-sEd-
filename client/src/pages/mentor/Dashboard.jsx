import React from 'react';
import { mentorDashboardData } from '../../assets/assets';


function Dashboard() {
  const { summary, latestEnrollments } = mentorDashboardData;

  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-5 text-center">
          <p className="text-2xl font-bold">{summary.totalEnrollments}</p>
          <p className="text-gray-600">Total Enrollments</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 text-center">
          <p className="text-2xl font-bold">{summary.totalCourses}</p>
          <p className="text-gray-600">Total Courses</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 text-center">
          <p className="text-2xl font-bold">{summary.totalEarnings}</p>
          <p className="text-gray-600">Total Earnings</p>
        </div>
      </div>

 
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Course Title</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {latestEnrollments.map((enroll, index) => (
              <tr key={enroll.id} className="border-t">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 flex items-center gap-3">
                  <img
                    src={enroll.profileImage}
                    alt={enroll.studentName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  {enroll.studentName}
                </td>
                <td className="px-4 py-2">{enroll.courseTitle}</td>
                <td className="px-4 py-2">{enroll.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
