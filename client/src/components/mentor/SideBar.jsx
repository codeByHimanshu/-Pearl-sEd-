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
      <aside
        className="w-64 min-h-screen fixed top-0 left-0 z-40 bg-gradient-to-b from-green-150 via-white to-green-200 text-gray-600 shadow-xl px-5 py-8 rounded-tr-3xl rounded-br-3xl backdrop-blur-lg flex flex-col items-start justify-start"
      >
        <h2 className="text-2xl font-bold mb-10 text-center w-full text-gray-800">
          Mentor Panel
        </h2>

        <nav className="flex flex-col gap-4 w-full">
          {menuBar.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl text-base font-medium w-full transition-all duration-200 ${
                  isActive
                    ? "bg-white text-green-700 shadow-md"
                    : "hover:bg-white/50 hover:text-green-700"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    )
  );
}

export default SideBar;
