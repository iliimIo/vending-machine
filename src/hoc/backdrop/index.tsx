import { ReactElement } from 'react';
import { useTypedSelector } from '../../hooks';

interface IProps {}

export default function BackDrop({}: IProps): ReactElement | null {
  const { isConfirm, isForm } = useTypedSelector(state => state.modal);

  if (!isConfirm && !isForm) return null;
  return (
    <div
      className='w-full h-full fixed'
      style={{
        zIndex: 99,
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    />
  );
}
