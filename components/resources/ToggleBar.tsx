import ToggleButton from './ToggleButton';
import React from 'react';

type Props = {};

export default function ToggleBar({}: Props) {
  return (
    <div className="flex flex-row mb-1 p-3 justify-center align-middle">
      <ToggleButton text="Registry" selected={true} />
      <ToggleButton text="News" selected={false} />
    </div>
  );
}
