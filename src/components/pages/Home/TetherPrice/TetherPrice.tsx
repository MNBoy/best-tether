import { Template } from '@/components/template';
import { addCommas } from '@persian-tools/persian-tools';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { FC } from 'react';
import { BuyForm } from './BuyForm';
import useTetherPrice from './useTetherPrice';
const inter = Inter({ subsets: ['latin'] });

interface I_Props {
  className?: string;
}

const TetherPrice: FC<I_Props> = ({ className }) => {
  const { rate, isLoading } = useTetherPrice();

  return (
    <div
      className={clsx(className, 'flex flex-col w-full items-center gap-y-4')}
    >
      <h2 className='text-4xl font-bold lg:text-5xl'>نرخ لحظه ای تتر</h2>
      <Template.Skeleton
        className='rounded-lg flex items-center flex-col text-center justify-center min-w-[160px]'
        isLoaded={!isLoading}
      >
        <h3 className={clsx('text-4xl font-extrabold', inter.className)}>
          {addCommas(rate)}
        </h3>
        <p className='font-medium mt-1'>تومان</p>
      </Template.Skeleton>

      {/* Form */}
      <BuyForm isLoading={isLoading} rate={rate} className='mt-8' />
    </div>
  );
};

export { TetherPrice };
