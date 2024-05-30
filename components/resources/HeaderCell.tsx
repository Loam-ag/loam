import { DownSort } from './icons/DownSort';
import { UpSort } from './icons/UpSort';
import { HeaderCellProps as Props } from './types';
import React, { FC } from 'react';

export const HeaderCell: FC<Props> = ({ header, style, desc }) => {
  let sortIcons = (
    <div className="flex-col ml-1">
      <UpSort fill="#000000" />
      <DownSort fill="#000000" />
    </div>
  );
  if (desc === undefined) {
    sortIcons = (
      <div className="flex-col ml-1">
        <UpSort fill="#000000" />
        <DownSort fill="#000000" />
      </div>
    );
  } else if (desc) {
    sortIcons = (
      <div className="flex-col ml-1">
        <UpSort fill="#FFFFFF" />
        <DownSort fill="#000000" />
      </div>
    );
  } else {
    sortIcons = (
      <div className="flex-col ml-1">
        <UpSort fill="#000000" />
        <DownSort fill="#FFFFFF" />
      </div>
    );
  }
  return (
    <div className={`flex flex-row grow ${style} align-middle `}>
      {header}
      <div className="flex-col ml-1">{sortIcons}</div>
    </div>
  );
};
