export interface IOrders {
  itemId: string,
  itemName: string,
  icon: string,
  quantity: number,
  price: number,
  isHq: boolean,
  retainer: string,
  orderPlacement: number,
  serverName: string,
  lastUpdate: number,
}

export const mockItems: IOrders[] = [
  {
    itemId: '38264',
    itemName: 'Flan aux carottes',
    icon: 'https://universalis.app/_next/image?url=https%3A%2F%2Funiversalis-ffxiv.github.io%2Funiversalis-assets%2Ficon2x%2F38264.png&w=256&q=75',
    quantity: 99,
    price: 2170,
    isHq: true,
    retainer: 'Arthuriana',
    orderPlacement: 1,
    serverName: 'Louisoix',
    lastUpdate: 1670708158062 - 30000,
  },
  {
    itemId: '36081',
    itemName: 'Fromage garlemaldais',
    icon: 'https://universalis.app/_next/image?url=https%3A%2F%2Funiversalis-ffxiv.github.io%2Funiversalis-assets%2Ficon2x%2F36081.png&w=256&q=75',
    quantity: 48,
    price: 441,
    isHq: false,
    retainer: 'Arthuriana',
    orderPlacement: 4,
    serverName: 'Saggitarius',
    lastUpdate: 1670711158065,
  },
];
