import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/mentor/Navbar'
import SideBar from '../../components/mentor/SideBar'

function Mentor() {
  return (
    <div className="flex flex-col">
      
      <Navbar />

    
      <div className="flex flex-1">
      
        <div className="w-64 bg-gray-100 border-r">
          <SideBar />
        </div>

      
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Mentor
