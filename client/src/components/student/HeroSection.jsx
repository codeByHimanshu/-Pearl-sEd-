import React from 'react';
import SearchBar from './SearchBar';

function HeroSection() {
  return (
    <section className="relative py-24 px-6 md:px-16 flex flex-col items-center text-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Decorative SVGs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <svg
          className="absolute top-0 left-0 w-[700px] opacity-10"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="300" fill="#4ADE80" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-[400px] opacity-10"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="#60A5FA" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight relative z-10 animate__animated animate__fadeInDown">
            Ready to boost your skills? <br />
            <span className="text-green-600">Join trending courses today!</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-2">
            Explore a wide range of courses, learn from top instructors, and take your career to the next level. Whether you’re a beginner or a pro, there’s something for everyone.
          </p>
          <ul className="flex flex-wrap gap-4 mt-4">
            <li className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Web Development</li>
            <li className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Data Science</li>
            <li className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">AI & ML</li>
            <li className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">Design</li>
          </ul>
          {/* <div className="mt-8 w-full max-w-xl z-10 animate__animated animate__fadeInUp">
            <SearchBar />
          </div> */}
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-xs md:max-w-sm">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
              alt="Student learning"
              className="rounded-2xl shadow-lg border-4 border-white"
            />
            <img
              src="/path-to-image.png"
              alt="underline"
              className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-32 md:w-40"
            />
          </div>
          <div className="mt-6 flex flex-col items-center">
            <span className="text-green-600 font-bold text-2xl">+10,000</span>
            <span className="text-gray-500 text-sm">Students enrolled</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;