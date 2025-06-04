import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      className="flex items-center justify-between px-6 py-3 shadow-lg bg-gradient-to-r from-gray-700 via-slate-800 to-blue-950 text-white"
    >
      <div className="flex items-center gap-3">
        <img
          src="/src/assets/loggo.svg"
          alt="Logo"
          className="h-18 cursor-pointer drop-shadow-lg"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <p className="text-sm sm:text-base font-medium capitalize">
              {user.name || "Mentor"}
            </p>
            <button
              onClick={handleLogout}
              className="text-sm text-white hover:text-gray-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-sm text-red-100 italic hover:text-red-200"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="text-sm text-green-100 italic hover:text-green-200"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
