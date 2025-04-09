import React from 'react'

function ActionButton() {
    return (
      <div className="bg-gray-100  text-blue-900 p-10 rounded-2xl shadow-xl max-w-3xl mx-auto text-center animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeInDown">
       <span className='text-green-600'>   "The future belongs to those who learn more skills and combine them in creative ways."</span>
        </h2>
        <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Empower your journey with practical knowledge, expert mentorship, and hands-on projects. Whether you're just starting or upskilling — we’ve got you covered!
        </p>
        <div className="flex justify-center gap-4 animate__animated animate__fadeInUp animate__delay-2s">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300 shadow-md">
            Get Started
          </button>
          <button className="bg-transparent border border-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    );
  }
export default ActionButton
