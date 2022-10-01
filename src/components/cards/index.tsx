import { ReactElement } from 'react';

import Header from '../../components/header';

interface IProps {
  price: string | number;
  handlerChecked: (price: number | string) => void;
  classed?: string;
  active?: boolean;
}

export default function Card({ price, handlerChecked, classed }: IProps): ReactElement {
  return (
    <div
      className={
        'flex items-center justify-center  bg-indigo-400  shadow-md cursor-pointer border border-indigo-400 hover:border-indigo-400 hover:bg-white text-white hover:text-indigo-500 ' +
        classed
      }
      onClick={() => handlerChecked(price)}
    >
      <Header title={`${price}`} classed=' font-medium' />
    </div>
  );
}
