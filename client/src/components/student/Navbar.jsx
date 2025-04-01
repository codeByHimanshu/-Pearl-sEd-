import React from 'react'
import { Link } from 'react-router-dom'
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'

function Navbar() {
 const  isCourseList = location.pathname.includes('/course-list')
 const {openSignIn} = useClerk()
 const {user}=useUser()
  return (
      <>
<div className={`flex items-center justify-between p-4 ${
  !isCourseList ? " bg-yellow-500" : "bg-cyan-300"
}`}>
       <img src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="logo" className="h-12 w-12" />
       <div className="flex items-center space-x-4">
         <div className="hidden md:flex  items-center px-4 py-2 rounded-md gap-4">
           <button className="mr-4 justify-between px-2 py-2  font-bold">Become Mentor</button>
           <Link to="/my-enrollments" className="text-white">My Enrollments</Link>
      { user ? <UserButton /> :  <button onClick={()=>{openSignIn()}} className="px-4 py-2 bg-blue-500 text-white text-lg rounded-md">
         Create Account
        </button>}
        </div>
      </div>
      <div className='md:hidden flex  items-center '>
        <div>
        <button className="mr-4 justify-between px-2 py-2  font-bold">Become Mentor</button>
        <Link to="/my-enrollments" className="text-white">My Enrollments</Link>
        </div>
        <button className='max-w-3xs px-2 py-2 '>
          <img className='rounded-2xl w-10 h-10 ' src="https://images.unsplash.com/photo-1586374579358-9d19d632b6df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGljb258ZW58MHx8MHx8fDA%3D" alt="" />
        </button>
      </div>
     </div>

</>
  )
}

export default Navbar
