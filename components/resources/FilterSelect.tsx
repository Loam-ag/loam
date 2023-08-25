import { NavbarSelectProps } from './types';
import React from 'react';
import { FC } from 'react';

export const FilterSelect = ({
  label,
  options,
  maxWidth
}: NavbarSelectProps) => {
  return (
    <select
      className={`flex text-black rounded-md drop-shadow-md py-2 pl-1 pr-3 mr-3 flex-shrink basis-1/3`}
      style={{ maxWidth: maxWidth }}
    >
      <option>{label}</option>
      {options.map((option) => {
        return <option>{option}</option>;
      })}
    </select>
  );
};
