import React from 'react';
import { IColumnType } from '../Table';

interface TableHeaderProps<T> {
  columns: IColumnType<T>[];
}
function TableHeader<T>({ columns }: TableHeaderProps<T>) {
  return (
    <tr className="bg-gray-50 h-10 border-b">
      {columns.map((column) => (
        <th
          key={`table-head-cell-${column.title}`}
          className="text-left text-slate-700 px-3 last:text-right"
          style={{ width: column.width }}
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
}

export default TableHeader;
