import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/mentor/Navbar'

function Mentor() {
  return (
    <div>
      <Navbar />
   
      
    <div>
        < Outlet />
    </div>
    </div>
  )
}

export default Mentor
