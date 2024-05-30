import { Cell } from './Cell';
import { HeaderCell } from './HeaderCell';
import TableBody from './TableBody';
import { TableHeader } from './TableHeader';
import { MethodologyType, TableProps } from './types';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  SortingState
} from '@tanstack/react-table';
import React, { FC } from 'react';

export const Table: FC<TableProps> = ({ data }) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columnHelper = createColumnHelper<MethodologyType>();

  const columns = [
    columnHelper.display({
      id: 'FileIcon',
      cell: () => <Cell fileIcon={true} data={''} />
    }),
    columnHelper.accessor('MethodologyName', {
      cell: (info) => <Cell data={info.getValue()} />,
      header: () => (
        <HeaderCell
          header="Methodology Name"
          desc={sorting[0]?.desc}
          style="text-left"
        />
      )
    }),
    columnHelper.accessor('MethodologyVersion', {
      cell: (info) => <Cell data={info.getValue()} align="text-center" />,
      header: () => (
        <HeaderCell
          header="Version"
          desc={sorting[0]?.desc}
          style="text-center mr-3"
        />
      )
    }),
    columnHelper.accessor('MethodologyHostedURL', {
      id: 'PDF Icon',
      header: () => <div />,
      cell: (info) => (
        <Cell downloadIcon={true} data={''} link={info.getValue()} />
      )
    })
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <table className="w-full text-black text-sm">
      <TableHeader table={table} />
      <TableBody table={table} />
    </table>
  );
};
