import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-row w-full items-center justify-center">
      <div className="flex-col m-3 py-3 px-1 w-full border-red-500 border-[2px]">
        <div className="flex-row m-3 p-3 border-blue-500 border-[2px]">
          NAVBAR
        </div>
        <div className="m-3 p-3 border-green-500 border-[2px]">TABLE</div>
      </div>
    </div>
  );
}
