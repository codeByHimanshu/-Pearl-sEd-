import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import "animate.css";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const location = useLocation();
  const isCourseList = location.pathname.includes("/course-list");
  const navigate = useNavigate();
  const { user, logout } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/course-list", label: "Courses" },
    ...(user ? [{ to: "/my-enrollments", label: "My Enrollments" }] : []),
  ];

  return (
    <nav className="sticky top-4 z-50 flex justify-center">
      <div
        className={`w-[95%] max-w-7xl rounded-full px-4 py-3 shadow-lg backdrop-blur-md animate__animated animate__fadeInDown transition-all duration-300
        bg-gradient-to-br from-green-100 via-white to-green-200`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img
              src="/src/assets/loggo.svg"
              alt="Logo"
              className="h-10 w-36 object-contain rounded-xl animate__animated animate__zoomIn"
            />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-700 font-semibold text-base px-3 py-1 rounded-lg hover:bg-white/40 transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <span className="font-medium text-gray-800 animate__animated animate__fadeIn">
                  Hello, {user.name || "Student"}
                </span>
                <button
                  onClick={() => {
                    logout();
                    localStorage.removeItem("user");
                    navigate("/");
                  }}
                  className="bg-white/80 text-green-700 font-semibold px-4 py-1.5 rounded-full hover:bg-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-white/80 text-green-700 font-semibold px-4 py-1.5 rounded-full hover:bg-white transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="bg-green-600 text-white font-semibold px-4 py-1.5 rounded-full hover:bg-green-700 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-3xl text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-2 rounded-2xl bg-white/90 text-green-800 backdrop-blur-lg shadow-md animate__animated animate__fadeInDown md:hidden">
            <ul className="flex flex-col space-y-2 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block font-semibold text-base px-3 py-2 rounded-lg hover:bg-green-100 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 flex flex-col space-y-2">
                {user ? (
                  <>
                    <span className="font-medium">
                      Hello, {user.name || "Student"}
                    </span>
                    <button
                      onClick={() => {
                        logout();
                        localStorage.removeItem("user");
                        setMenuOpen(false);
                        navigate("/");
                      }}
                      className="bg-green-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-700 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate("/login");
                      }}
                      className="bg-green-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-700 transition"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate("/signup");
                      }}
                      className="bg-white text-green-700 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
