import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header';
import Button from '../components/button';
import Image from '../components/image';

export default function NotFound(): ReactElement {
  return (
    <div className='lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
      <div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
        <div className='relative'>
          <div className='absolute'>
            <div>
              <Header
                title="Looks like you've found the doorway to the great nothing"
                classed='text-2xl text-gray-800 font-bold'
              />
              <p className='my-2 text-gray-800'>
                Sorry about that! Please visit our hompage to get where you need to go.
              </p>
              <Link to='/'>
                <Button classed='sm:w-full lg:w-auto py-4 px-8 bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50'>
                  Take me there!
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Image permalink='https://i.ibb.co/G9DC8S0/404-2.png' alt='404' />
          </div>
        </div>
      </div>
      <div>
        <Image permalink='https://i.ibb.co/ck1SGFJ/Group.png' alt='404' />
      </div>
    </div>
  );
}
