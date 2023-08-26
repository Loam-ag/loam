import TableRow from './TableRow';
import { MethodologyType, TableProps } from './types';
import React from 'react';

const TableBody = (data: MethodologyType | any) => {
  return (
    <>
      <TableRow data={data} />
    </>
  );
};

export default TableBody;
