import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import "animate.css";
import { AppContext } from "../../context/AppContext";

function Navbar() {
  const isCourseList = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { isMentor } = useContext(AppContext);

  return (
    <div
      className={`flex items-center justify-between p-4 shadow-md animate__animated animate__fadeInDown ${
        isCourseList
          ? "bg-gradient-to-r from-gray-800 to-gray-900"
          : "bg-gradient-to-r from-cyan-500 to-blue-500"
      }`}
    >
      <img
        src="/src/assets/loggo.svg"
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
        className="h-20 w-64 animate__animated animate__zoomIn  rounded-xl mix-blend-color-burn object-fit"
      />
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center px-4 py-2 rounded-md gap-4">
          {user && (
            <>
              <button
                className="mr-4 font-bold text-gray-300 hover:text-white transition duration-300 animate__animated animate__fadeIn"
                onClick={() => navigate("/mentor")}
              >
                {isMentor ? "Mentor Dashboard" : "Become Mentor"}
              </button>

              <Link
                to="/my-enrollments"
                className="text-gray-300 hover:text-white transition duration-300 animate__animated animate__fadeIn"
              >
                My Enrollments
              </Link>
            </>
          )}
          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={() => openSignIn()}
              className="px-4 py-2 bg-gray-700 text-white text-lg rounded-md hover:bg-gray-600 transition duration-300 animate__animated animate__bounceIn"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <div>
          {user && (
            <>
              <button
                className="mr-4 font-bold text-gray-300 hover:text-white transition duration-300 animate__animated animate__fadeIn"
                onClick={() => navigate("/mentor")}
              >
                {isMentor ? "Mentor Dashboard" : "Become Mentor"}
              </button>
              <Link
                to="/my-enrollments"
                className="text-gray-300 hover:text-white transition duration-300 animate__animated animate__fadeIn"
              >
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="px-2 py-2 animate__animated animate__fadeIn"
          >
            <img
              className="rounded-2xl w-10 h-10 hover:opacity-80 transition duration-300"
              src="https://images.unsplash.com/photo-1586374579358-9d19d632b6df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGljb258ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
