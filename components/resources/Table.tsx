import { Cell } from './Cell';
import { HeaderCell } from './HeaderCell';
import TableBody from './TableBody';
import { TableHeader } from './TableHeader';
import { MethodologyType, TableProps } from './types';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender
} from '@tanstack/react-table';
import React, { FC } from 'react';

const columnHelper = createColumnHelper<MethodologyType>();
const columns = [
  columnHelper.display({
    id: 'FileIcon',
    cell: () => <Cell fileIcon={true} data={''} />
  }),
  columnHelper.accessor('MethodologyName', {
    cell: (info) => <Cell data={info.getValue()} />,
    header: () => <div className="grow text-left">Name</div>
  }),
  columnHelper.accessor('MethodologyVersion', {
    cell: (info) => <Cell data={info.getValue()} align="text-center" />,
    header: () => <div className="grow text-center mr-5">Version</div>
  }),
  columnHelper.accessor('MethodologyHostedURL', {
    id: 'PDF Icon',
    header: () => <div className="grow text-left"></div>,
    cell: (info) => (
      <Cell downloadIcon={true} data={''} link={info.getValue()} />
    )
  })
];

export const Table: FC<TableProps> = ({ data }) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel()
  });
  return (
    <table className="w-full text-black text-sm">
      <TableHeader table={table} />
      <TableBody table={table} />
    </table>
  );
};
