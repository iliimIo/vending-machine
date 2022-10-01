import { Dispatch } from 'redux';
import { TYPE, Action } from './types';
import { ILogger } from './reducer';

export const getLogger = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.LOGGER_PENDING,
  });

  try {
    dispatch({
      type: TYPE.GET_LOGGER,
    });
  } catch (e) {
    dispatch({
      type: TYPE.LOGGER_FAIL,
      payload: '',
    });
  }
};

export const setLogger = (payload: ILogger) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.LOGGER_PENDING,
  });

  try {
    dispatch({
      type: TYPE.SET_LOGGER,
      payload,
    });
  } catch (e) {
    dispatch({
      type: TYPE.LOGGER_FAIL,
      payload: '',
    });
  }
};
