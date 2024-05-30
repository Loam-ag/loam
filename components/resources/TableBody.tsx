import { InnerTableProps } from './types';
import { flexRender } from '@tanstack/react-table';
import React from 'react';
import { FC } from 'react';

const TableBody: FC<InnerTableProps> = ({ table }) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="border-b-black border-opacity-20 border-dotted border-b-2"
        >
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
