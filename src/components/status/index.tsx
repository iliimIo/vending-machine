import { ReactElement } from 'react';

interface IProps {
  stock: number;
}

export default function Status({ stock }: IProps): ReactElement {
  /* @Function: verify stock */
  const verifyStock = (stock: number): string => {
    if (stock === 0) return 'bg-red-500';
    if (stock > 0 && stock <= 5) return 'bg-yellow-500';
    if (stock > 5) return 'bg-green-500';
    return 'bg-gray-500';
  };

  return (
    <div className='relative'>
      <div className={'rounded-full w-3 h-3 md:w-3 md:h-3 ' + verifyStock(stock)} />
      <span className='absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full'></span>
    </div>
  );
}
