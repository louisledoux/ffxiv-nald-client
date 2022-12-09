import React from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';

function SearchInput() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
        <span className="text-gray-400">
          <SearchIcon />
        </span>
      </div>
      <input
        className="block w-full pl-8 border-none outline-none focus-visible:ring-0"
        type="search"
        placeholder="Rechercher"
      />
    </div>
  );
}

export default SearchInput;
