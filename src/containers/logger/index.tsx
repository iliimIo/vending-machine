import Button from '../../components/button';
import Icon from '../../components/icon';
import { ReactElement, Fragment } from 'react';
import { useTypedSelector } from '../../hooks';

interface IProps {
  handleModalClose: () => void;
}

export default function Logger({ handleModalClose }: IProps): ReactElement {
  const { logger } = useTypedSelector(state => state.logger);

  return (
    <div className='bg-white rounded-lg w-full'>
      <div className='flex justify-end items-center w-full'>
        <Button
          classed='cursor-pointer border rounded-[4px] icon-md bg-transparent w-8 h-8 rounded-full'
          handlerChecked={() => handleModalClose()}
        >
          <Icon name='close' color='#808080' />
        </Button>
      </div>
      <table className='min-w-max w-full table-auto'>
        <thead>
          <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
            <th className='py-3 px-6 text-left'>ID</th>
            <th className='py-3 px-6 text-left'>TYPE</th>
            <th className='py-3 px-6 text-center'>PRODUCT</th>
            <th className='py-3 px-6 text-center'>COIN</th>
            <th className='py-3 px-6 text-center'>TOTAL COIN</th>
            <th className='py-3 px-6 text-center'>WALLET</th>
          </tr>
        </thead>
        <tbody className='text-gray-600 text-sm font-light'>
          {logger?.map((logger, index) => (
            <tr className='border-b border-gray-200 hover:bg-gray-100' key={index}>
              <td className='py-3 px-6 text-left whitespace-nowrap'>
                <div className='flex items-center'>
                  <span className='font-medium'>{index + 1}</span>
                </div>
              </td>
              <td className='py-3 px-6 text-left'>
                <div className='flex items-center'>
                  <span>{logger.type}</span>
                </div>
              </td>
              <td className='py-3 px-6'>
                <div className='flex items-center justify-center'>
                  <div>
                    {logger.product ? (
                      <div className='flex flex-col gap-y-1 bg-purple-200 rounded-md'>
                        <span className='text-purple-600 py-1 px-3  text-xs'>
                          <b className='font-medium'>title</b> : {logger.product.title}
                        </span>
                        <span className='text-purple-600 py-1 px-3  text-xs'>
                          <b className='font-medium'>code</b> : {logger.product.code}
                        </span>
                        <span className='text-purple-600 py-1 px-3  text-xs'>
                          <b className='font-medium'>stock</b> : {logger.product.stock}
                        </span>
                        <span className='text-purple-600 py-1 px-3  text-xs'>
                          <b className='font-medium'>price</b> : {logger.product.price}
                        </span>
                      </div>
                    ) : (
                      'N/A'
                    )}
                  </div>
                </div>
              </td>
              <td className='py-3 px-6 text-center'>
                {logger && logger.coins.length > 0 ? (
                  <Fragment>
                    {logger.coins?.map((log, index) => (
                      <div
                        key={index}
                        className='flex flex-col items-center justify-center gap-y-1 bg-purple-200 rounded-md'
                      >
                        <span className='text-purple-600 py-1 px-3  text-xs'>
                          <b className='font-medium'>quantity</b> : {log.quantity}
                        </span>
                        <span className='text-purple-600 py-1 px-3  text-xs'>
                          <b className='font-medium'>price</b> : {log.price}
                        </span>
                      </div>
                    ))}
                  </Fragment>
                ) : (
                  <span>N/A</span>
                )}
              </td>
              <td className='py-3 px-6 text-center'>
                <div className='flex items-center'>
                  <span>{logger.totalCoin}</span>
                </div>
              </td>
              <td className='py-3 px-6 text-center'>
                <div className='flex items-center'>
                  <span>{logger.wallet}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
