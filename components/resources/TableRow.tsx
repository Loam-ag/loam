import { MethodologyType, TableProps } from './types';
import React from 'react';

const TableRow = (data: MethodologyType | any) => {
  return (
    <>
      <div>I</div>
      <div className="">Name</div>
      <div className="">Version</div>
      <div className="">PDF</div>
      <div className="">NEX</div>
    </>
  );
};

export default TableRow;
