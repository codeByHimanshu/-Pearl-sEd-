import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/mentor/Navbar'
import SideBar from '../../components/mentor/SideBar'

function Mentor() {
  return (
    <div>
      <Navbar />
   
      
    <div className='flex-1'>
<SideBar />
    </div>
      <div>

        < Outlet />
      </div>
    </div>
  )
}

export default Mentor
