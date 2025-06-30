import React from 'react';

function ActionButton() {
  return (
    <div className="bg-gray-100 text-blue-900 p-10 rounded-2xl mx-auto animate__animated animate__fadeInUp max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8 items-center">
       
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 animate__animated animate__fadeInDown">
            <span className="text-green-600">
              "The future belongs to those who learn more skills and combine them in creative ways."
            </span>
          </h2>
          <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Empower your journey with practical knowledge, expert mentorship, and hands-on projects. Whether you're just starting or upskilling — we’ve got you covered!
          </p>
          <div className="flex justify-center md:justify-start gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition duration-300 shadow-md">
              Get Started
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
              Read More
            </button>
          </div>
        </div>
    
        <div className="flex-1 flex flex-col items-center md:items-end">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
            alt="Learning"
            className="rounded-xl shadow-lg mb-4 w-full max-w-xs"
          />
          <div className="bg-white rounded-xl p-4 shadow-md w-full max-w-xs text-sm text-gray-700">
            <ul className="space-y-2">
              <li>✅ Real-world projects</li>
              <li>✅ 1:1 mentorship</li>
              <li>✅ Flexible learning paths</li>
              <li>✅ Community support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionButton;
