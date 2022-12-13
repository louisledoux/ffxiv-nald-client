import React from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Table, { IColumnType } from '../../components/Table/Table';
import { IOrders } from '../../mocks/orders';

const relativeTime = require('dayjs/plugin/relativeTime');

type OrdersTableProps = {
  orders: IOrders[],
}
function OrdersTable({
  orders,
}: OrdersTableProps) {
  const columns: IColumnType<IOrders>[] = [
    {
      key: 'itemName',
      title: 'Objet',
      render: (_, { icon, itemName }) => (
        <div className="flex flex-row gap-2 items-center">
          <div>
            <div className="relative w-7 h-7">
              <Image
                className="rounded-3xl"
                src={icon}
                alt={`${itemName}-icon`}
                fill
              />
            </div>
          </div>
          {itemName}
        </div>
      ),
    },
    {
      key: 'quantity',
      title: 'Qté',
    },
    {
      key: 'price',
      title: 'Prix',
    },
    {
      key: 'serverName',
      title: 'Serveur',
    },
    {
      key: 'orderPlacement',
      title: '#',
    },
    {
      key: 'lastUpdate',
      title: 'Mis à jour',
      render: (_, { lastUpdate }) => {
        dayjs.extend(relativeTime);
        // @ts-ignore
        return dayjs(lastUpdate).fromNow();
      },
    },
  ];

  return (
    <Table data={orders} columns={columns} />
  );
}

export default OrdersTable;
