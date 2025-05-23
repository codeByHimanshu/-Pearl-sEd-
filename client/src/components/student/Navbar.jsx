import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
import "animate.css";

function Navbar() {
  const location = useLocation();
  const isCourseList = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { isMentor } = useContext(AppContext);

  return (
    <div
      className={`flex justify-between items-center px-6 py-4 shadow-md animate__animated animate__fadeInDown ${
        isCourseList
          ? "bg-gradient-to-r from-gray-200 to-gray-500 text-black"
          : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
      }`}
    >
     
      <img
        src="/src/assets/loggo.svg"
        alt="Logo"
        onClick={() => navigate("/")}
        className="h-16 w-52 cursor-pointer rounded-xl object-contain animate__animated animate__zoomIn"
      />

   
      <div className="hidden md:flex items-center space-x-6">
        {user && (
          <>
            <button
              className="font-medium hover:text-gray-100 transition duration-300 animate__animated animate__fadeIn"
              onClick={() => navigate("/mentor")}
            >
              {isMentor ? "Mentor Dashboard" : "Become Mentor"}
            </button>

            <Link
              to="/my-enrollments"
              className="font-medium hover:text-gray-100 transition duration-300 animate__animated animate__fadeIn"
            >
              My Enrollments
            </Link>
          </>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300 animate__animated animate__bounceIn"
          >
            Create Account
          </button>
        )}
      </div>

      <div className="md:hidden flex items-center space-x-4">
        {user && (
          <>
            <button
              className="font-medium text-sm hover:text-gray-100 transition duration-300"
              onClick={() => navigate("/mentor")}
            >
              {isMentor ? "Dashboard" : "Mentor"}
            </button>

            <Link
              to="/my-enrollments"
              className="text-sm font-medium hover:text-gray-100"
            >
              Enrollments
            </Link>
          </>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button onClick={() => openSignIn()} className="p-1">
            <img
              className="w-10 h-10 rounded-full hover:opacity-90 transition"
              src="https://images.unsplash.com/photo-1586374579358-9d19d632b6df?w=500&auto=format&fit=crop&q=60"
              alt="Sign In Icon"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
