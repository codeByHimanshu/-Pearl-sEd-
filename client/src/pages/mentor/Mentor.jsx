import React from 'react'
import { Outlet } from 'react-router-dom'

function Mentor() {
  return (
    <div>
      <h1>
        mentor page
      </h1>
      
    <div>
        < Outlet />
    </div>
    </div>
  )
}

export default Mentor
