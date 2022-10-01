import { ReactElement } from 'react';

interface IProps {
  message?: string;
}

export default function Error({ message }: IProps): ReactElement {
  return (
    <div className='bg-red-50 border-l-8 border-red-900 mb-2 w-screen'>
      <div className='flex items-center'>
        <div className='p-2'>
          <div className='flex items-center'>
            <p className='px-6 py-4 text-red-900 font-semibold text-lg'>Internal server error.</p>
          </div>
          <div className='px-16 mb-4'>
            <li className='text-md font-bold text-red-500 text-sm'>Oops! : {message}</li>
          </div>
        </div>
      </div>
    </div>
  );
}
