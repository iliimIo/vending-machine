import ProductsService from '../../services/inventories/products';
import { Dispatch } from 'redux';
import { TYPE, Action } from './types';

export const getInventories = (page: number, limit: number) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.INVENTORIES_PENDING,
  });

  try {
    const { products } = await ProductsService.all(page, limit);
    dispatch({
      type: TYPE.GET_INVENTORIES,
      payload: products,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.INVENTORIES_FAIL,
      payload: e.data,
    });
  }
};

export const reduceInventories = (code: string) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.INVENTORIES_PENDING,
  });

  try {
    dispatch({
      type: TYPE.REDUCE_INVENTORIES,
      payload: code,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.INVENTORIES_FAIL,
      payload: e.data,
    });
  }
};
