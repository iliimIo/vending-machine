import { ReactElement } from 'react';

import { BUTTON_TYPE } from '../../types/enum/button.enum';

interface IProps {
  button?: string;
  handlerChecked?: (params?: any) => void;
  type?: string;
  classed?: string;
  children: any;
  disabled?: boolean;
}

export default function Button({ button, handlerChecked, children, classed, disabled }: IProps): ReactElement {
  switch (button) {
    case BUTTON_TYPE.NUMBER_KEYPAD:
      return (
        <button
          type='button'
          className={
            'w-14 h-14 my-2 border rounded-lg text-center font-medium shadow-md cursor-pointer border border-indigo-400 rounded-full mx-2 ' +
            classed
          }
          onClick={handlerChecked}
          disabled={disabled ? disabled : false}
        >
          {children}
        </button>
      );
    case BUTTON_TYPE.DEPOSIT_KEYPAD:
      return (
        <button
          type='button'
          className={
            'sm:w-full lg:w-auto my-2 border py-2 px-6 rounded-lg text-center font-medium bg-white shadow-md cursor-pointer border border-indigo-400 hover:border-indigo-400 hover:bg-indigo-400 text-indigo-500 hover:text-white ' +
            classed
          }
          onClick={handlerChecked}
          disabled={disabled ? disabled : false}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          type='button'
          className={'my-2 border rounded md text-center ' + classed}
          onClick={handlerChecked}
          disabled={disabled ? disabled : false}
        >
          {children}
        </button>
      );
  }
}
