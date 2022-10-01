import { combineReducers } from 'redux';
import inventoriesReducer from './inventories/reducer';
import walletReducer from './wallet/reducer';
import priceReducer from './prices/reducer';
import messageReducer from './messages/reducer';
import loggerReducer from './logger/reducer';
import modalReducer from './modal/reducer';

const reducers = combineReducers({
  inventories: inventoriesReducer,
  wallet: walletReducer,
  message: messageReducer,
  prices: priceReducer,
  logger: loggerReducer,
  modal: modalReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
