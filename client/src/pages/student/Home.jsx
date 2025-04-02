import React from 'react'
import { Outlet } from 'react-router-dom'
import HeroSection from '../../components/student/HeroSection'

function Home() {
  return (
    <div>
    <HeroSection />
      <Outlet />
    </div>

  )
}

export default Home
