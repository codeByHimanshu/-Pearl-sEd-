import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="sticky top-4 z-50 flex justify-center">
      <div
        className="w-[95%] max-w-6xl rounded-full px-6 py-3 shadow-xl backdrop-blur-md bg-gradient-to-br from-green-100 via-white to-green-200 text-gray-800 animate__animated animate__fadeInDown transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/src/assets/loggo.svg"
              alt="Logo"
              className="h-12 w-auto drop-shadow-md"
            />
            <span className="font-bold text-lg hidden sm:inline-block">
              Mentor Panel
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <p className="text-sm sm:text-base font-medium capitalize text-gray-700">
                  {user.name || "Mentor"}
                </p>
                <button
                  onClick={handleLogout}
                  className="text-sm px-4 py-1.5 bg-white/80 text-green-700 font-semibold rounded-full shadow-sm hover:bg-white transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="text-sm px-4 py-1.5 bg-white/80 text-red-600 font-semibold rounded-full shadow-sm hover:bg-white transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="text-sm px-4 py-1.5 bg-green-600 text-white font-semibold rounded-full shadow-sm hover:bg-green-700 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
