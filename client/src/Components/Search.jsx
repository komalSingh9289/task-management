import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ onSearch }) => {
  return (
    <div className="flex items-center justify-end p-4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search tasks"
          className="w-full p-2 pl-10 border-2 border-green-700  focus:outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
        <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default Search;
