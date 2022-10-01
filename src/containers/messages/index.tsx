import { ReactElement } from 'react';
import { useTypedSelector } from '../../hooks';

interface IProps {}

export default function Messages({}: IProps): ReactElement {
  const { text, loading } = useTypedSelector(state => state.message);

  if (loading) return <span>...loading</span>;
  return (
    <div className='relative block p-8 overflow-hidden border bg-white border-slate-100 rounded-lg mt-4'>
      <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

      <div className='justify-between sm:flex'>
        <div>
          <h5 className='text-xl font-bold text-indigo-500'>Response message</h5>
          <p className='mt-1 text-xs font-medium text-slate-600'>By The jiw</p>
        </div>

        <div className='flex-shrink-0 hidden ml-3 sm:block'>
          <img
            className='object-cover w-16 h-16 rounded-lg shadow-sm'
            src='https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.6435-9/57227749_1159947967500017_955456775400718336_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xsJqS9Fx_kQAX_M_92p&tn=Rxksjla8BFaKUBiH&_nc_ht=scontent.fcnx4-1.fna&oh=00_AT84KEVViIhfLMOpAL58exJ_6MGswe2pTNWjOO4SrqlQ1A&oe=635D7540'
            alt=''
          />
        </div>
      </div>

      <div className='mt-4 sm:pr-8'>
        <p className='text-lg font-medium text-gray-500 uppercase'>{text}</p>
      </div>
    </div>
  );
}
