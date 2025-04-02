import React from 'react';

function HeroSection() {
  return (
    <div className='flex flex-col items-center justify-center text-center py-16 px-6 bg-gray-100 md:px-12'>
      <h1 className='text-3xl md:text-5xl font-bold text-gray-800 leading-tight relative'>
        Want to grow your skills? Enroll in the latest courses today!
        <span className='text-green-700 block relative'>
          <img src="/path-to-image.png" alt="" className='md:block hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2'/>
        </span>
      </h1>
      <p className='mt-6 text-lg md:text-xl text-gray-600 max-w-2xl'>
        Discover top-rated courses in programming, design, marketing, and more. Enhance your skills and stay ahead in your career with industry-leading instructors.
      </p>
      <p className='mt-4 text-lg md:text-xl text-gray-600 max-w-2xl'>
        Join thousands of learners and take the next step towards your professional growth. Flexible learning at your own pace!
      </p>
    
    </div>
  );
}

export default HeroSection;