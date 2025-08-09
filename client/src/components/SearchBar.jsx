import React, { useState } from 'react';
import { searchImagesAndVideos } from '../../services/api';


const SearchBar = ({ onSearch,loading}) => {
  // we do the search function here
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(loading) return;

    // call the parent's search function
    onSearch(searchQuery);
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  

  return (
    <div className="flex justify-center w-full">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="bg-gray-200 rounded-2xl shadow-lg px-4 py-2 flex items-center hover:border-2 border-blue-400">
          <input
            type="text"
            placeholder="Search images..."
            value={searchQuery}
            onChange={handleInputChange}
            disabled={loading}
            className="w-full bg-transparent outline-none text-black placeholder-gray-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !searchQuery.trim()}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
