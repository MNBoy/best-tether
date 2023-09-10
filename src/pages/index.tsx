import { HomeHeader, TetherPrice } from '@/components/pages/Home';

export default function Home() {
  return (
    <section className='flex flex-col gap-y-20 items-center pb-10'>
      <HomeHeader className='mt-10' />
      <TetherPrice />
    </section>
  );
}
