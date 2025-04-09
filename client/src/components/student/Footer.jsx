import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-300 py-10 px-6 md:px-20 animate__animated animate__fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="space-y-4">
          <img src="/src/assets/loggo.svg" alt="Logo" className="h-16 w-auto mix-blend-color-burn" />
          <p className="text-sm">
            Empowering learners and mentors through quality education, hands-on projects,
            and a community that grows together.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Contact</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Subscribe to our Newsletter</h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md w-full bg-amber-50 text-black focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-500 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>


      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © 2025 Grow&Learn. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
