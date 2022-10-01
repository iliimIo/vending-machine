import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { openModalForm, closeModalForm } from '../store/modal/actions';

import VendingMachines from '../containers/vending-machines';
import Messages from '../containers/messages';
import NumberKeypadDeposit from '../containers/number-keypad/deposit';
import Keypad from '../containers/number-keypad/keypad';
import Modal from '../containers/modal';
import Logger from '../containers/logger';

export default function Home(): ReactElement {
  const dispatch = useDispatch()<any>;

  /* @Function: handle modal form */
  const handleModalOpen = async () => {
    await dispatch(openModalForm());
  };

  /* @Function: handle modal */
  const handleModalClose = async () => {
    await dispatch(closeModalForm());
  };

  return (
    <>
      <div className='relative sm:flex sm:flex-row justify-center bg-transparent rounded-3xl w-full'>
        <div className='flex-col flex self-center z-10 min-h-screen w-4/6'>
          <div className='p-12 mx-auto'>
            <VendingMachines />
            <Messages />
          </div>
        </div>
        <div className='flex justify-center self-center z-10 bg-white min-h-screen w-2/6'>
          <div className='py-10 px-4 mx-auto'>
            <NumberKeypadDeposit handleModalOpen={() => handleModalOpen()} />
            <Keypad />
          </div>
        </div>
      </div>
      <Modal>
        <Logger handleModalClose={() => handleModalClose()} />
      </Modal>
    </>
  );
}
