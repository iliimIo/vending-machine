import { IPrice } from '../store/prices/reducer';

export interface IBalance extends IPrice {
  total: number;
}

export const calculateBalanceCoins = (wallet: number, prices: IPrice[]): IBalance[] => {
  let balances = [];

  for (let i = prices?.length - 1; i >= 0; i--) {
    while (wallet >= prices[i].price) {
      wallet -= prices[i].price;
      balances.push(prices[i]);
    }
  }
  return sumBalanceCoins(balances);
};

const sumBalanceCoins = (balances: IPrice[]): IBalance[] => {
  return balances.reduce((unique: any, balance) => {
    const objUnique = unique.find((o: any) => o.price === balance.price);
    if (objUnique) objUnique.total++;
    else unique.push({ ...balance, total: 1 });
    return unique;
  }, []);
};
