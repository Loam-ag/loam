import { InnerTableProps as Props } from './types';
import { flexRender } from '@tanstack/react-table';
import React from 'react';
import { FC } from 'react';

export const TableHeader: FC<Props> = ({ table }) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder ? null : (
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? 'cursor-pointer select-none'
                      : '',
                    onClick: header.column.getToggleSortingHandler()
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
