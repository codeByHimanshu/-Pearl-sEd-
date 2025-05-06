import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchValue.trim();

    if (query) {
      navigate(`/course-list/${encodeURIComponent(query)}`);
    } else {
      navigate("/course-list");
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="max-w-xl w-full flex items-center bg-gray-200 shadow-md rounded-full p-3 border border-gray-400 animate__animated animate__fadeInDown"
    >
      <FiSearch className="text-gray-700 text-2xl mx-3 animate__animated animate__pulse animate__infinite" />

      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search courses..."
        className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-600"
      />

      <button
        type="submit"
        className="bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition duration-300 animate__animated animate__fadeIn"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
