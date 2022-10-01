import { Action, TYPE } from './types';
import { IInventories } from '../inventories/reducer';

interface ICointType {
  quantity: number;
  price: number;
}

export interface ILogger {
  type: string;
  product: IInventories | undefined;
  coins: ICointType[] | [];
  totalCoin: number;
  wallet: number;
}

interface IState {
  logger: ILogger[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  logger: [],
  loading: false,
  error: null,
};

const inventoryReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.LOGGER_PENDING:
      return { ...state, loading: true };
    case TYPE.LOGGER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TYPE.GET_LOGGER:
      return { ...state, loading: false };
    case TYPE.SET_LOGGER:
      return { ...state, loading: false, logger: [...state.logger, action.payload] };
    default:
      return state;
  }
};

export default inventoryReducer;
