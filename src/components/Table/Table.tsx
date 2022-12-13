import React from 'react';
import TableHeader from './TableComponents/TableHeader';
import TableRow from './TableComponents/TableRow';

/*
  Needed by Orders :
  - Item
  - Icon
  - Quantity
  - Price
  - Retainer
  - Placement
  - Server name
  - Last update
  - List name

  Needed by Lists :
  - Item
  - Icon
  - Price per unit per server
  - Last price update
*/
export interface IColumnType<T> {
  key: string;
  title: string;
  width?: string;
  // eslint-disable-next-line no-unused-vars
  render?: (column: IColumnType<T>, item: T) => void;
}
interface TableProps<T> {
  data: T[];
  columns: IColumnType<T>[];
}
function Table<T>({
  data, columns,
}: TableProps<T>) {
  return (
    <table className="rounded-lg shadow">
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody>
        <TableRow data={data} columns={columns} />
      </tbody>
    </table>
  );
}

export default Table;
