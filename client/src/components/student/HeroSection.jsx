import React from 'react';
import SearchBar from './SearchBar';

function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-white py-20 px-6 md:px-16 flex flex-col items-center text-center">
      {/* Decorative SVG or blob in background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-[600px] opacity-10 -z-10"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="300" fill="#86EFAC" />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight relative z-10">
        Want to grow your skills? <br />
        <span className="text-green-600">Enroll in the latest courses today!</span>
      </h1>

      {/* Optional image underlined effect */}
      <div className="relative w-full max-w-[420px] mt-2 hidden md:block">
        <img
          src="/path-to-image.png"
          alt="underline"
          className="absolute left-1/2 transform -translate-x-1/2 w-40"
        />
      </div>

      {/* Subtext */}
      <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl z-10">
        Discover top-rated courses in <span className="font-semibold text-gray-800">programming</span>, <span className="font-semibold text-gray-800">design</span>, <span className="font-semibold text-gray-800">marketing</span>, and more.
        Enhance your skills and stay ahead in your career with industry-leading instructors.
      </p>

      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl z-10">
        Join thousands of learners and take the next step toward your professional growth. <span className="text-green-700 font-medium">Flexible learning</span> at your own pace!
      </p>

      {/* Search Bar */}
      <div className="mt-10 w-full max-w-3xl z-10">
        <SearchBar />
      </div>
    </div>
  );
}

export default HeroSection;
