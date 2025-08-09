import React, { useState } from 'react';
import { getImagesAndVideos } from '../../services/api';

// we do the search function here


const SearchBar = () => {
  return (
    <div className="flex justify-center w-full"> {/*the max-w-2xl -- makes it responsive*/ }
      <div className="w-full max-w-2xl bg-gray-200 rounded-2xl shadow-lg px-4 py-2 flex items-center before:border hover:border-2 border-blue-400">
      
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none text-black placeholder-gray-500"

          />
      hi

      </div>
    </div>
  );
};

export default SearchBar;
