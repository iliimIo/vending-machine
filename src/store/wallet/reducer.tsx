import { Action, TYPE } from './types';

interface IState {
  wallet: number;
  loading: boolean;
  error: string | null;
}

const initialState = {
  wallet: 0,
  loading: false,
  error: null,
};

const walletReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.WALLET_PENDING:
      return { ...state, loading: true };
    case TYPE.WALLET_FAIL:
      return { ...state, loading: false, error: action.payload };
    case TYPE.GET_WALLET:
      return { ...state, loading: false };
    case TYPE.DEPOSIT_WALLET:
      return {
        ...state,
        loading: false,
        wallet: state.wallet + action.payload,
      };
    case TYPE.REDUCE_WALLET:
      return {
        ...state,
        loading: false,
        wallet: state.wallet - action.payload,
      };
    case TYPE.WITHDRAW_WALLET:
      return {
        ...state,
        loading: false,
        wallet: 0,
      };
    default:
      return state;
  }
};

export default walletReducer;
