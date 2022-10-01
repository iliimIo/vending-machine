import { Action, TYPE } from './types'

interface IState {
  isConfirm: boolean
  isForm: boolean
  loading: boolean
  error: string | null
}

const initialState = {
  isConfirm: false,
  isForm: false,
  loading: false,
  error: null,
}

const modalReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.OPEN_MODAL_CONFIRM:
      return { ...state, isConfirm: true }
    case TYPE.CLOSE_MODAL_CONFIRM:
      return {
        ...state,
        isConfirm: false,
      }
    case TYPE.OPEN_MODAL_FORM:
      return { ...state, isForm: true }
    case TYPE.CLOSE_MODAL_FORM:
      return {
        ...state,
        isForm: false,
      }
    default:
      return state
  }
}

export default modalReducer
