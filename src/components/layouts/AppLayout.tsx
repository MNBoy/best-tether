import { BgGradient } from '@/components/common/UI';
import Head from 'next/head';
import React, { FC } from 'react';

interface I_Props {
  children: React.ReactNode;
}

const AppLayout: FC<I_Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>خرید تتر</title>
      </Head>
      <main className='min-h-screen relative dark'>
        <BgGradient />
        {children}
      </main>
    </>
  );
};

export { AppLayout };
