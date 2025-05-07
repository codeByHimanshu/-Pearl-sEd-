import React from 'react';
import SearchBar from './SearchBar';

function HeroSection() {
  return (
    <div className="relative  py-24 px-6 md:px-16 flex flex-col items-center text-center overflow-hidden">

 
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <svg
          className="absolute top-0 left-0 w-[700px] opacity-10"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="300" fill="#4ADE80" />
        </svg>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight relative z-10 animate__animated animate__fadeInDown">
        Ready to boost your skills? <br />
        <span className="text-green-600">Join trending courses today!</span>
      </h1>


      <div className="relative w-full max-w-[420px] mt-2 hidden md:block">
        <img
          src="/path-to-image.png"
          alt="underline"
          className="absolute left-1/2 transform -translate-x-1/2 w-40"
        />
      </div>


   
      <div className="mt-10 w-full max-w-2xl z-10 animate__animated animate__fadeInUp ">
        <SearchBar />
      </div>
    </div>
  );
}

export default HeroSection;