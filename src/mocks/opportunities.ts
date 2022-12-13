interface IServerData {
  serverName: string,
  itemPrice: number,
  quantity: number,
  lastUpdate: number,
}

export interface IOpportunity {
  itemId: string,
  itemName: string,
  icon: string,
  isHq: boolean,
  buyServer: IServerData,
  sellServer: IServerData,
  potentialProfit: number,
  marginRate: number,
  sellVelocity: number,
}

export const opportunitiesMock: IOpportunity[] = [
  {
    itemId: '37843',
    itemName: 'Philtre chimérique d\'intelligence VII',
    icon: 'https://universalis.app/_next/image?url=https%3A%2F%2Funiversalis-ffxiv.github.io%2Funiversalis-assets%2Ficon2x%2F37843.png&w=256&q=75',
    isHq: true,
    buyServer: {
      serverName: 'Ragnarok',
      itemPrice: 3207,
      quantity: 99,
      lastUpdate: Date.now(),
    },
    sellServer: {
      serverName: 'Louisoix',
      itemPrice: 4419,
      quantity: 99,
      lastUpdate: Date.now(),
    },
    potentialProfit: 199998,
    marginRate: 0.38,
    sellVelocity: 1,
  },
  {
    itemId: '33939',
    itemName: 'Matéria de l\'art magique X',
    icon: 'https://universalis.app/_next/image?url=https%3A%2F%2Funiversalis-ffxiv.github.io%2Funiversalis-assets%2Ficon2x%2F33939.png&w=256&q=75',
    isHq: false,
    buyServer: {
      serverName: 'Omega',
      itemPrice: 8398,
      quantity: 20,
      lastUpdate: Date.now(),
    },
    sellServer: {
      serverName: 'Louisoix',
      itemPrice: 12568,
      quantity: 20,
      lastUpdate: Date.now(),
    },
    potentialProfit: 83400,
    marginRate: 0.67,
    sellVelocity: 1,
  },
];
