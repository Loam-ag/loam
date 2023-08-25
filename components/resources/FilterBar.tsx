import { FilterSelect } from './FilterSelect';
import { SearchBar } from './SearchBar';
import { NAVBAR_SELECT_WIDTH, REGISTRY_SELECT_WIDTH } from './constants';
import React from 'react';

export const FilterBar = () => {
  return (
    <div className="flex flex-row mb-1 p-3 gap-5">
      <FilterSelect
        label="Registry"
        options={['Verified Carbon Standard (VCS)']}
        maxWidth={REGISTRY_SELECT_WIDTH}
      />
      <FilterSelect
        label="Sectoral Scope"
        options={[]}
        maxWidth={NAVBAR_SELECT_WIDTH}
      />
      <FilterSelect
        label="Methodology"
        options={[]}
        maxWidth={NAVBAR_SELECT_WIDTH}
      />
      <SearchBar />
    </div>
  );
};
