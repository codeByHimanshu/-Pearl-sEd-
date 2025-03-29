import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
 const  isCourseList = location.pathname.includes('/course-list')
  return (
      <>
<div className={`flex items-center justify-between p-4 ${
  !isCourseList ? " bg-yellow-500" : "bg-cyan-300"
}`}>
       <img src="logo.png" alt="logo" className="h-12 w-12" />
       <div className="flex items-center space-x-4">
         <div className="px-4 py-2 rounded-md">
           <button className="mr-4 justify-between px-2 py-2  font-bold">Become Mentor</button>
           <Link to="/my-enrollments" className="text-white">My Enrollments</Link>
        </div>
         <button className="px-4 py-2 bg-blue-500 text-white text-lg rounded-md">
         Create Account
        </button>
      </div>
     </div>

</>
  )
}

export default Navbar
