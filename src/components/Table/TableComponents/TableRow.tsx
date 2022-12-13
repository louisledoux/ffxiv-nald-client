/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IColumnType } from '../Table';
import TableRowCell from './TableRowCell';

interface TableRowProps<T> {
  data: T[];
  columns: IColumnType<T>[];
}
function TableRow<T>({ data, columns }: TableRowProps<T>) {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr
          key={`table-body-${itemIndex}`}
          className={`h-10 ${itemIndex % 2 && 'bg-gray-50'}`}
        >
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableRow;
