import React from 'react';

type Props = {};

const TableRow = (props: Props) => {
  return (
    <>
      <div className="border-[1px]">I</div>
      <div className="col-span-8 border-[1px]">Name</div>
      <div className=" border-[1px]">Version</div>
      <div className="border-[1px]">PDF</div>
      <div className="border-[1px]">NEX</div>
    </>
  );
};

export default TableRow;
