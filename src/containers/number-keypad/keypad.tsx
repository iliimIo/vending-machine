import { ReactElement, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks';
import { setLogger } from '../../store/logger/action';
import { removeMessage, setMessage } from '../../store/messages/actions';
import { IInventories } from '../../store/inventories/reducer';
import { reduceInventories } from '../../store/inventories/actions';
import { reduceWallet, withdrawWallet } from '../../store/wallet/actions';
import { withdrawPrice } from '../../store/prices/actions';

import Button from '../../components/button';
import { BUTTON_TYPE } from '../../types/enum/button.enum';
import { calculateBalanceCoins } from '../../utils/calculate';
import { activeArray } from '../../utils/active';

interface IProps {}

export default function Keypad({}: IProps): ReactElement {
  const dispatch = useDispatch()<any>;
  const { inventories } = useTypedSelector(state => state.inventories);
  const { wallet } = useTypedSelector(state => state.wallet);
  const { text } = useTypedSelector(state => state.message);
  const { prices } = useTypedSelector(state => state.prices);

  const [isActive, setIsActive] = useState<string[]>([]);
  const [productCode, setProductCode] = useState<string>('');

  const selections = ['A', '1', '2', 'B', '3', '4'];

  /* @Function: handle add product code */
  const handleAddProductCode = (name: string): void => {
    if (wallet <= 0) {
      dispatch(setMessage('wallet is empty'));
      return;
    }

    if (productCode?.length >= 2 || name === productCode) {
      dispatch(setMessage('product code is already selected'));
      return;
    }

    if (productCode?.length >= 2) {
      setProductCode(name);
      setIsActive([name]);
      return;
    }

    if (text) {
      dispatch(removeMessage());
    }

    setIsActive([...isActive, name]);
    setProductCode(productCode + name);
  };

  /* @Function: handle confirm */
  const handleConfirm = (): void => {
    if (productCode?.length < 2) {
      dispatch(setMessage('please select product code 2 digits'));
      return;
    }

    const product: IInventories | undefined = inventories.find(inventory => inventory.code === productCode);

    if (!product) {
      dispatch(setMessage(`product code ${productCode} not found`));
      handleReset();
      return;
    }

    if (product.stock === 0) {
      dispatch(setMessage(`product ${product.title}(${productCode}) is out of stock`));
      handleReset();
      return;
    }

    if (wallet < product.price) {
      dispatch(setMessage(`wallet is not enough to buy ${product.title}(${productCode})`));
      handleReset();
      return;
    }

    dispatch(reduceInventories(productCode));
    dispatch(reduceWallet(product.price));
    dispatch(setMessage(`${product.title}(${productCode}) is purchased`));
    dispatch(
      setLogger({
        type: 'BUY',
        product: product,
        coins: [],
        totalCoin: product.price,
        wallet: wallet - product.price,
      })
    );
    handleReset();
  };

  /* @Function: handle reset */
  const handleReset = (): void => {
    setProductCode('');
    setIsActive(['']);
  };

  /* @Function: handle withdraw */
  const handleWithdraw = () => {
    if (wallet <= 0) {
      dispatch(setMessage('wallet is empty.'));
      return;
    }

    if (text) {
      dispatch(removeMessage());
    }

    const coins = calculateBalanceCoins(wallet, prices);

    dispatch(withdrawWallet());
    dispatch(withdrawPrice(coins));
    dispatch(
      setLogger({
        type: 'WITHDRAW',
        product: undefined,
        coins: coins,
        totalCoin: wallet,
        wallet: 0,
      })
    );
    dispatch(setMessage(`withdraw success ${wallet} coin.`));
  };

  return (
    <div className='flex flex-col items-center justify-center w-full my-4'>
      <div className='flex justify-between w-full'>
        <div className='flex flex-col justify-start'>
          <p className='text-xl font-semibold my-2'>Number Keypad</p>
        </div>
      </div>

      <div className='items-center justify-center'>
        <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-full pt-4 '>
          {selections?.map((item, index) => (
            <Fragment key={index}>
              <Button
                button={BUTTON_TYPE.NUMBER_KEYPAD}
                handlerChecked={() => handleAddProductCode(item)}
                classed={`${activeArray(isActive, item) ? 'bg-indigo-400 text-white' : 'bg-white text-indigo-400'} `}
              >
                {item}
              </Button>
            </Fragment>
          ))}
        </div>
      </div>

      <div className='flex flex-row justify-center items-center w-full'>
        <div className='reset'>
          <Button
            classed='py-2 px-4 w-auto bg-indigo-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:indigo-500 focus:ring-opacity-50 text-sm uppercase font-bold'
            handlerChecked={() => handleReset()}
          >
            Reset keypad
          </Button>
        </div>
        <div className='confirm'>
          <Button
            classed='py-2 px-4 w-auto bg-indigo-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:indigo-500 focus:ring-opacity-50 text-sm uppercase font-bold mx-1'
            handlerChecked={() => handleConfirm()}
          >
            Confirm
          </Button>
        </div>
        <div className='width-draw'>
          <Button
            classed='py-2 px-4 w-auto bg-indigo-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:indigo-500 focus:ring-opacity-50 text-sm uppercase font-bold'
            handlerChecked={() => handleWithdraw()}
          >
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
}
