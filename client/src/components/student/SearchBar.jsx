import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


function SearchBar({ data }) {
  const [searchValue, setSearchValue] = useState(data);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      navigate("/course-list/" + searchValue.trim());
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
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        value={searchValue}
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
