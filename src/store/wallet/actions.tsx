import { Dispatch } from 'redux';
import { TYPE, Action } from './types';

export const getWallet = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.WALLET_PENDING,
  });

  try {
    dispatch({
      type: TYPE.GET_WALLET,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.WALLET_FAIL,
      payload: e.message,
    });
  }
};

export const depositWallet = (price: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.WALLET_PENDING,
  });

  try {
    dispatch({
      type: TYPE.DEPOSIT_WALLET,
      payload: price,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.WALLET_FAIL,
      payload: e.message,
    });
  }
};

export const reduceWallet = (price: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.WALLET_PENDING,
  });

  try {
    dispatch({
      type: TYPE.REDUCE_WALLET,
      payload: price,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.WALLET_FAIL,
      payload: e.message,
    });
  }
};

export const withdrawWallet = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.WALLET_PENDING,
  });

  try {
    dispatch({
      type: TYPE.WITHDRAW_WALLET,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.WALLET_FAIL,
      payload: e.message,
    });
  }
};
