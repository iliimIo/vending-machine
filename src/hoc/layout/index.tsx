import { ReactElement, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps): ReactElement {
  return <main className='h-screen w-full flex flex-col justify-center items-center bg-indigo-500'>{children}</main>;
}
