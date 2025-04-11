import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SearchBar from '../../components/student/SearchBar'


function CoursesList() {
  const navigate = useNavigate()
  const { searchvalue } = useParams()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 animate__animated animate__fadeInUp">
        {/* Header Section */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-blue-700 mb-2 animate__animated animate__fadeInDown">
            Course List
          </h1>
          <p className="text-sm text-gray-600">
            <span
              className="text-blue-500 hover:underline cursor-pointer transition-all duration-300"
              onClick={() => navigate('/')}
            >
              Home
            </span>
            {' / '}
            <span className="text-gray-800">Course List</span>
          </p>
        </div>

        {/* Search Bar */}
        <div className="animate__animated animate__fadeIn">
          <SearchBar data={searchvalue} />
        </div>
      </div>
    </div>
  )
}

export default CoursesList
