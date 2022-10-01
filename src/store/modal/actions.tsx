import { Dispatch } from 'redux'
import { TYPE, Action } from './types'

export const openModalConfirm = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.OPEN_MODAL_CONFIRM,
  })
}

export const closeModalConfirm = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.CLOSE_MODAL_CONFIRM,
  })
}

export const openModalForm = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.OPEN_MODAL_FORM,
  })
}

export const closeModalForm = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.CLOSE_MODAL_FORM,
  })
}
