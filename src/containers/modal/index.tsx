import { ReactElement, ReactNode } from 'react';
import { useTypedSelector } from '../../hooks';
import BackDrop from '../../hoc/backdrop';

interface IProps {
  children: ReactNode;
}

export default function Modal({ children }: IProps): ReactElement {
  const { isForm } = useTypedSelector(state => state.modal);

  return (
    <>
      <BackDrop />
      <div
        className='flex flex-col space-y-4 min-w-screen w-full h-screen animated items-center fadeIn faster fixed flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900'
        style={{
          zIndex: 100,
          position: 'fixed',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: isForm ? 'unset' : 'none',
        }}
      >
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-full max-w-xs sm:max-w-4xl sm:min-w-4xl flex flex-col items-center justify-center p-3 bg-white shadow-md rounded-2xl hover:shadow-lg'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
