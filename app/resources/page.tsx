import ToggleBar from '@/components/resources/ToggleBar';
import React from 'react';

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-row w-full items-center justify-center bg-white">
      <div className="flex-col m-3 pt-1 pb-3 px-1 w-full border-red-500 border-[2px]">
        <ToggleBar />
        <div className="flex-row m-3 p-3 border-blue-500 border-[2px] text-black">
          NAVBAR
        </div>
        <div className="m-3 p-3 border-green-500 border-[2px] text-black">
          TABLE
        </div>
      </div>
    </div>
  );
}
