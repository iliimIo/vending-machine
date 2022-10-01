import { Dispatch } from 'redux';
import { TYPE, Action } from './types';
import prices from '../../types/json/prices.json';
import { IBalance } from '../../utils/calculate';

export const setPrice = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PRICE_PENDING,
  });

  try {
    dispatch({
      type: TYPE.SET_PRICE,
      payload: prices,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.PRICE_FAIL,
      payload: e.message,
    });
  }
};

export const getPrice = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PRICE_PENDING,
  });

  try {
    dispatch({
      type: TYPE.GET_PRICE,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.PRICE_FAIL,
      payload: e.message,
    });
  }
};

export const depositPrice = (price: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PRICE_PENDING,
  });

  try {
    dispatch({
      type: TYPE.DEPOSIT_PRICE,
      payload: price,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.PRICE_FAIL,
      payload: e.message,
    });
  }
};

export const withdrawPrice = (prices: IBalance[]) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PRICE_PENDING,
  });

  try {
    dispatch({
      type: TYPE.WITHDRAW_PRICE,
      payload: prices,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.PRICE_FAIL,
      payload: e.message,
    });
  }
};
