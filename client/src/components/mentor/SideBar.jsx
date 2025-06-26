import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";
import { FiBookOpen, FiGrid, FiUsers, FiPlusCircle } from "react-icons/fi";

function SideBar() {
  const { isMentor } = useContext(AppContext);

  const menuBar = [
    {
      name: "Dashboard",
      path: "/mentor/dashboard",
      icon: <FiGrid size={20} />,
    },
    {
      name: "Add Course",
      path: "/mentor/add-course",
      icon: <FiPlusCircle size={20} />,
    },
    {
      name: "My Courses",
      path: "/mentor/my-course",
      icon: <FiBookOpen size={20} />,
    },
    {
      name: "Enrolled Students",
      path: "/mentor/students-enrolled",
      icon: <FiUsers size={20} />,
    },
  ];

  return (
    isMentor && (
      <div
        className="w-64 min-h-screen bg-gradient-to-b from-gray-400 to-white text-blue p-4 shadow-lg
        sticky top-0 z-30 flex flex-col"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Mentor Panel
        </h2>
        <nav className="flex flex-col gap-3">
          {menuBar.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white hover:text-indigo-600 ${
                  isActive ? "bg-white text-indigo-600 font-semibold" : ""
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    )
  );
}

export default SideBar;
