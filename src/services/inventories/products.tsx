import { API } from '../index';
import { AxiosResponse } from 'axios';

import products from '../../types/json/products.json';

export default {
  all: (page: number, limit: number) => {
    return API.get(`/products?limit=${limit}&skip=${page}`).then((_res: AxiosResponse) => {
      return { products };
    });
  },
};
