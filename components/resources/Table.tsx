import TableBody from './TableBody';
import TableHeader from './TableHeader';
import React from 'react';

type Props = {};

const Table = (props: Props) => {
  return (
    <div className="grid grid-cols-12 grid-flow-row m-3 p-3 text-black border-[1px]">
      <TableHeader />
      <TableBody />
    </div>
  );
};

export default Table;
