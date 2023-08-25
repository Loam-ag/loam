import React from 'react';

type Props = {
  text: string;
  selected: boolean;
};

export default function ToggleButton({ text, selected }: Props) {
  return (
    <div className="p-1 mx-1">
      {selected ? (
        <div className="font-semibold text-black">{text}</div>
      ) : (
        <div className="font-light text-black">{text}</div>
      )}
    </div>
  );
}
