import { ToggleButtonProps } from './types';
import React from 'react';
import { FC } from 'react';

export const ToggleButton: FC<ToggleButtonProps> = ({ label, selected }) => {
  return (
    <div className="p-1 mx-1 text-lg">
      {selected ? (
        <div className="font-semibold text-black">{label}</div>
      ) : (
        <div className="font-light text-black">{label}</div>
      )}
    </div>
  );
};
