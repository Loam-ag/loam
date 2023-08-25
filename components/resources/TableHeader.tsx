import React from 'react';

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <>
      <div className="border-[1px]"></div>
      <div className="col-span-8 border-[1px]">Name</div>
      <div className="border-[1px]">Version</div>
      <div className="border-[1px]"></div>
      <div className="border-[1px]"></div>
    </>
  );
};

export default TableHeader;
