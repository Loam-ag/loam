import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { MethodologyType, TableProps } from './types';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender
} from '@tanstack/react-table';
import React from 'react';

const columnHelper = createColumnHelper<MethodologyType>();
const columns = [
  columnHelper.display({
    id: 'Icon'
  }),
  columnHelper.accessor('MethodologyName', {
    header: 'Methodology'
  }),
  columnHelper.accessor('MethodologyVersion', {
    header: 'Version'
  }),
  columnHelper.accessor('MethodologyHostedURL', {
    id: 'PDF Icon'
  })
];

const Table = (data: MethodologyType | any) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });
  return (
    <div className="grid grid-cols-12 grid-flow-row m-3 p-3 text-black border-[1px]"></div>
  );
};

export default Table;
