import { ReactElement } from 'react';

import Icon from '../icon';
import Status from '../status';
import Header from '../header';

interface IProps {
  id: number;
  title: string;
  code: string;
  color: string;
  price: number;
  stock: number;
}

export default function Can({ title, code, color, price, stock }: IProps): ReactElement {
  /* @Function: verify stock */
  const verifyStock = (stock: number): string => {
    if (stock === 0) return 'cursor-not-allowed';
    return 'cursor-pointer';
  };

  return (
    <div className='relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full'>
      <div className={'shadow p-2 rounded-lg bg-white ' + verifyStock(stock)}>
        <div className='flex justify-center items-center relative rounded-lg overflow-hidden h-32 bg-gray-200 px-4'>
          <div className='flex flex-col justify-center item-center'>
            <Icon name='wineBottle' size='4x' color={color} />
            <Header title={title} classed='font-medium text-base md:text-md text-gray-800 line-clamp-1' />
          </div>
        </div>

        <div className='flex items-center justify-center py-1'>
          <Status stock={stock} />
          <p className='ml-2 text-gray-800 line-clamp-1 uppercase font-medium text-sm'>
            stock : {stock}
            <span className='pl-1 font-bold'>({code})</span>
          </p>
        </div>

        <div className='flex justify-between items-center mt-2 border border-indigo-500 border-dashed px-2 rounded-md'>
          <div className='flex justify-start'>
            <p className='inline-block font-semibold text-indigo-500 whitespace-nowrap leading-tight rounded-xl'>
              COIN :
            </p>
          </div>
          <div className='flex justify-end'>
            <p className='inline-block font-semibold text-indigo-500 whitespace-nowrap leading-tight rounded-xl'>
              <span className='text-sm uppercase'>$</span>
              <span className='text-lg'>{price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
