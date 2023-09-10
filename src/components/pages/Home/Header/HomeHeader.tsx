import clsx from 'clsx';
import { FC } from 'react';

interface I_Props {
  className?: string;
}

const HomeHeader: FC<I_Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col gap-y-1 items-center text-center'
      )}
    >
      <h1 className='text-6xl font-extrabold lg:text-7xl'>بست تتر</h1>
      <p className='font-medium text-base'>خرید تتر زیر قیمت بازار</p>
    </div>
  );
};

export { HomeHeader };
