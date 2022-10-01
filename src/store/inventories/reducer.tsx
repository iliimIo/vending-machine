import { Action, TYPE } from './types';

export interface IInventories {
  id: number;
  title: string;
  code: string;
  color: string;
  price: number;
  stock: number;
}

interface IState {
  inventories: IInventories[];
  inventory: IInventories | null;
  loading: boolean;
  error: string | null;
}

const initialState = {
  inventories: [],
  inventory: null,
  loading: false,
  error: null,
};

const inventoriesReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.INVENTORIES_PENDING:
      return { ...state, loading: true };
    case TYPE.INVENTORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TYPE.GET_INVENTORIES:
      return { ...state, loading: false, inventories: action.payload };
    case TYPE.REDUCE_INVENTORIES:
      return {
        ...state,
        loading: false,
        inventories: state.inventories.map(v => (v.code === action.payload ? { ...v, stock: v.stock - 1 } : v)),
      };
    default:
      return state;
  }
};

export default inventoriesReducer;
