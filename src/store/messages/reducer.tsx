import { Action, TYPE } from './types';

interface IState {
  text: string | undefined;
  loading: boolean;
  error: string | null;
}

const initialState = {
  text: undefined,
  loading: false,
  error: null,
};

const messageReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.MESSAGE_PENDING:
      return { ...state, loading: true };
    case TYPE.MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TYPE.GET_MESSAGE:
      return { ...state, loading: false };
    case TYPE.SET_MESSAGE:
      return { ...state, loading: false, text: action.payload };
    case TYPE.REMOVE_MESSAGE:
      return { ...state, loading: false, text: undefined };
    default:
      return state;
  }
};

export default messageReducer;
