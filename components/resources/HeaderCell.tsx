import { HeaderCellProps as Props } from './types';
import React, { FC } from 'react';

export const HeaderCell: FC<Props> = ({ header }) => {
  return <div className="flex border-black border-[1px]">{header}</div>;
};
