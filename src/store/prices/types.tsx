import { IPrice } from './reducer';
import { IBalance } from '../../utils/calculate';

export enum TYPE {
  PRICE_PENDING = 'PRICE_PENDING',
  PRICE_FAIL = 'PRICE_FAIL',
  SET_PRICE = 'SET_PRICE',
  GET_PRICE = 'GET_PRICE',
  DEPOSIT_PRICE = 'DEPOSIT_PRICE',
  WITHDRAW_PRICE = 'WITHDRAW_PRICE',
}

interface PRICE_PENDING {
  type: TYPE.PRICE_PENDING;
}

interface PRICE_FAIL {
  type: TYPE.PRICE_FAIL;
  payload: string;
}

interface SET_PRICE {
  type: TYPE.SET_PRICE;
  payload: IPrice[];
}

interface GET_PRICE {
  type: TYPE.GET_PRICE;
}

interface DEPOSIT_PRICE {
  type: TYPE.DEPOSIT_PRICE;
  payload: number;
}

interface WITHDRAW_PRICE {
  type: TYPE.WITHDRAW_PRICE;
  payload: IBalance[];
}

export type Action = PRICE_PENDING | PRICE_FAIL | SET_PRICE | GET_PRICE | DEPOSIT_PRICE | WITHDRAW_PRICE;
