import { SearchIcon } from '../icons/SearchIcon';
import { SEARCH_BAR_WIDTH } from './constants';
import React from 'react';

export const SearchBar = () => {
  return (
    <div
      className="flex ml-auto rounded-md drop-shadow-md bg-white items-center"
      style={{ maxWidth: SEARCH_BAR_WIDTH }}
    >
      <SearchIcon />
      <input className="text-black  py-2 pl-2 pr-3" placeholder="Search" />
    </div>
  );
};
