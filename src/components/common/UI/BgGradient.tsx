import Image from 'next/image';

const BgGradient = () => {
  return (
    <>
      <div className='fixed opacity-70 top-[20%] -right-[30%] lg:-right-[20%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12'>
        <Image
          src='/images/gradient-right.png'
          draggable={false}
          alt='Right gradient image'
          className='scale-150'
          width={1000}
          height={2000}
        />
      </div>
      <div className='fixed hidden lg:block opacity-70 top-0 -left-[20%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12'>
        <Image
          src='/images/gradient-left.png'
          draggable={false}
          alt='Left gradient image'
          className='scale-150'
          width={1000}
          height={2000}
        />
      </div>
    </>
  );
};

export { BgGradient };
