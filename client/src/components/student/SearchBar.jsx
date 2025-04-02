import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function SearchBar({data}) {
    const [searchValue, setSearchvalue]=useState( data ? data :"")
    const navigate = useNavigate()

    const handleSearch=(e)=>{
        e.preventDefault();
        navigate('/course-list/'+ searchValue)
    }
  return (
    <form
    onSubmit={handleSearch}
     className="max-w-xl w-full flex items-center bg-white shadow-md rounded-full p-2 border border-gray-300">
      <img
        src="https://source.unsplash.com/40x40/?education,learning"
        alt="Search"
        className="w-10 h-10 rounded-full object-cover mr-3"
      />

      <FiSearch className="text-gray-500 text-xl mx-3" />

      <input
      onChange={(e)=>{
        setSearchvalue(e.target.value)
      }}
        type="text"
        placeholder="Search courses..."
        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition duration-300"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
