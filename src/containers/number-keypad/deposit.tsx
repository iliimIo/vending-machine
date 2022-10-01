import { ReactElement, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks';
import { depositWallet } from '../../store/wallet/actions';
import { depositPrice } from '../../store/prices/actions';
import { setLogger } from '../../store/logger/action';
import { removeMessage, setMessage } from '../../store/messages/actions';

import Button from '../../components/button';
import ICon from '../../components/icon';
import { BUTTON_TYPE } from '../../types/enum/button.enum';

interface IProps {
  handleModalOpen: () => void;
}

export default function NumberKeypadDeposit({ handleModalOpen }: IProps): ReactElement {
  const dispatch = useDispatch()<any>;
  const { wallet } = useTypedSelector(state => state.wallet);
  const { text } = useTypedSelector(state => state.message);

  const prices = [1, 5, 10, 20, 50, 100, 500, 1000];

  /* @Function: handler add price */
  const handlerAddPrice = (price: number) => {
    if (text) {
      dispatch(removeMessage());
    }
    dispatch(depositWallet(price));
    dispatch(depositPrice(price));
    dispatch(
      setLogger({
        type: 'DEPOSIT',
        product: undefined,
        coins: [
          {
            quantity: 1,
            price,
          },
        ],
        totalCoin: price,
        wallet: wallet + price,
      })
    );
    dispatch(setMessage(`DEPOSIT ${price} COIN SUCCESS`));
  };

  return (
    <div className='flex flex-col items-center justify-center w-full my-4'>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col justify-start'>
          <p className='text-xl font-semibold my-2'>Deposit Coin</p>
          <div className='flex items-center space-x-2 text-gray-400 text-md'>
            <ICon name='wallet' size='lg' color='#808080' />
            <span>{wallet} coin</span>
          </div>
        </div>
        <div className='flex flex-col justify-end'>
          <div
            className='text-white flex items-center rounded-lg py-2 px-4 shadow-xl bg-pink-500 left-4 -top-6 cursor-pointer'
            onClick={handleModalOpen}
          >
            <ICon name='scroll' size='lg' color='#fff' />
            <span className='pl-2'>LOG</span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 w-full pt-4'>
        {prices?.map((price, index) => (
          <Fragment key={index}>
            <Button
              button={BUTTON_TYPE.DEPOSIT_KEYPAD}
              handlerChecked={() => handlerAddPrice(price)}
              classed='px-8 rounded-xl'
            >
              {price}
            </Button>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
