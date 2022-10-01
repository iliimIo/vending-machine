import { Action, TYPE } from './types';
// import { calculateBalanceCoins } from '../../utils/calculate';

export interface IPrice {
  id: number;
  quantity: number;
  price: number;
}

interface IState {
  prices: IPrice[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  prices: [],
  loading: false,
  error: null,
};

const priceReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.PRICE_PENDING:
      return { ...state, loading: true };
    case TYPE.PRICE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case TYPE.SET_PRICE:
      return { ...state, loading: false, prices: action.payload };
    case TYPE.GET_PRICE:
      return { ...state, loading: false };
    case TYPE.DEPOSIT_PRICE:
      return {
        ...state,
        loading: false,
        prices: state.prices.map(item =>
          item.price === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case TYPE.WITHDRAW_PRICE:
      return {
        ...state,
        prices: state.prices.map(item => {
          const coin = action.payload.find(coin => coin.id === item.id);
          if (coin) {
            return { ...item, quantity: item.quantity - coin.total };
          }
          return item;
        }),
        loading: false,
      };
    default:
      return state;
  }
};

export default priceReducer;
