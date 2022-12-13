import React from 'react';
import get from 'lodash/get';
import { IColumnType } from '../Table';

interface TableRowCellProps<T> {
  item: T;
  column: IColumnType<T>;
}
function TableRowCell<T>({ item, column }: TableRowCellProps<T>) {
  const value = get(item, column.key);
  return (
    <td
      className="
        first:text-slate-700 first:font-semibold
        last:text-right
        text-gray-500 px-3 py-4
      "
    >
      {column.render ? column.render(column, item) : value}
    </td>
  );
}

export default TableRowCell;
