import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks';
import { getInventories } from '../../store/inventories/actions';

import Can from '../../components/cards/can';

interface IProps {}

export default function VendingMachines({}: IProps): ReactElement {
  const dispatch = useDispatch()<any>;
  const { inventories } = useTypedSelector(state => state.inventories);

  useEffect(() => {
    fetchInventories();
  }, []);

  /* @API: fetch inventories */
  const fetchInventories = async () => {
    await dispatch(getInventories(1, 12));
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
      {inventories?.map((inventory, index) => (
        <div key={index} className='relative mx-auto w-full'>
          <Can
            id={inventory.id}
            title={inventory.title}
            code={inventory.code}
            color={inventory.color}
            price={inventory.price}
            stock={inventory.stock}
          />
        </div>
      ))}
    </div>
  );
}
