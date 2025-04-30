import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-between px-6 py-3 shadow-lg bg-gradient-to-r from-gray-700 via-slate-800 to-blue-950
 text-white "
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
        <p className="text-sm sm:text-base font-medium">
          {user ? user.firstName : "Guest"}
        </p>
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <span className="text-sm text-red-100 italic">Not Signed In</span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
