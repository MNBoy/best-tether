import { Template } from '@/components/template';
import clsx from 'clsx';
import { FC } from 'react';
import useBuyForm, { MAX_LIMITATION } from './useBuyForm';

interface I_Props {
  className?: string;
  rate: number;
  isLoading: boolean;
}

const BuyForm: FC<I_Props> = ({ className, rate, isLoading }) => {
  const { changeHandler, values } = useBuyForm({ rate });

  return (
    <div className={clsx(className, 'w-5/6 lg:w-1/2 flex flex-col gap-y-8')}>
      <Template.InputNumber
        label={<span className='text-xl'>مقدار به تتر</span>}
        size='lg'
        disabled={isLoading}
        placeholder='0'
        labelPlacement='outside'
        max={MAX_LIMITATION}
        valueNumber={values.SEND_AMOUNT}
        onValueChange={(val) => changeHandler(val, 'SEND')}
        endContent={
          <div className='pointer-events-none flex items-center'>
            <span className='text-default-400 text-lg'>تتر</span>
          </div>
        }
      />
      <Template.InputNumber
        label={<span className='text-xl'>مقدار به تومان</span>}
        size='lg'
        disabled={isLoading}
        placeholder='0'
        valueNumber={values.RECEIVE_AMOUNT}
        max={MAX_LIMITATION * rate}
        labelPlacement='outside'
        onValueChange={(val) => changeHandler(val, 'RECEIVE')}
        endContent={
          <div className='pointer-events-none flex items-center'>
            <span className='text-default-400 text-lg'>تومان</span>
          </div>
        }
      />

      <Template.Button
        isDisabled={isLoading || values.SEND_AMOUNT === 0}
        size='lg'
        variant='shadow'
        className='font-medium'
        color='primary'
      >
        خرید تتر
      </Template.Button>

      {/* Footer */}
      <div className='flex flex-col gap-y-4 text-default-400 text-center text-sm'>
        <p>مقدار دریافتی با توجه به نرخ لحظه ای تتر محاسبه میشود</p>
      </div>
    </div>
  );
};

export { BuyForm };
