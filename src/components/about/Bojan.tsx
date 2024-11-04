'use client';

import Image from 'next/image';
import bojan from '@/../public/team/bojan-perduv.jpeg';
import { useInView } from 'react-intersection-observer';
import Subtitle from '../UI/Subtitle';

const Bojan = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div
      ref={ref}
      className='mt-32 lg:grid lg:grid-cols-12 lg:items-center max-w-8xl lg:mx-auto overflow-hidden'
    >
      <div
        className={`lg:col-span-6 lg:col-start-2 max-w-7xl bg-primary-default text-black px-12 py-12 h-fit z-10 ${
          inView
            ? 'translate-y-0 opacity-100 visible blur-0'
            : 'translate-y-80 opacity-0 invisible blur-[2px]'
        } transition-all duration-[1500ms] ease-in-out`}
      >
        <Subtitle>glavni lik</Subtitle>
        <h2 className='text-4xl mt-5 underlined text-white'>dr Bojan Perduv</h2>
        <p className='mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className='mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className={`relative lg:col-span-5 lg:col-start-8 lg:min-h-[800px] -translate-x-20 ${
          inView
            ? '-translate-y-10 opacity-100 visible blur-0'
            : 'translate-y-80 opacity-0 invisible blur-[2px]'
        } transition-all duration-[1500ms] delay-[400ms] ease-in-out`}
      >
        <Image
          src={bojan}
          alt='Grand Dental klinika dr Bojan Perduv '
          fill
          priority
          className='object-cover'
        />
      </div>
    </div>
  );
};

export default Bojan;
