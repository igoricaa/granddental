'use client';

import { routes } from '@/app/utils/data';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Logo from './UI/logo/logo';
import { Link } from 'next-view-transitions';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TODO:extract to separate component, reuse in sidearea */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-2 hover:opacity-70 transition-opacity relative z-50'
      >
        <div className='w-8 h-8 sm:w-10 sm:h-10 lg:w-6 lg:h-6 flex flex-col justify-center lg:gap-[6px] sm:gap-[10px] gap-2'>
          <span
            className={`block w-full h-[2px] bg-current transition-transform duration-300 origin-center ${
              isOpen
                ? 'rotate-45 translate-y-[10px] sm:translate-y-3 lg:translate-y-2'
                : ''
            }`}
          />
          <span
            className={`block w-full h-[2px] bg-current transition-transform duration-300 ${
              isOpen ? 'scale-0' : 'scale-100'
            }`}
          />
          <span
            className={`block w-full h-[2px] bg-current transition-transform duration-300 origin-center ${
              isOpen
                ? '-rotate-45 -translate-y-[10px] sm:-translate-y-3 lg:-translate-y-2'
                : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`absolute top-0 left-0 w-[100vw] h-[100vh] bg-background transition-all duration-700 ${
          isOpen
            ? 'translate-x-0 opacity-100 visible'
            : 'translate-x-full opacity-0 invisible'
        }`}
      >
        <Link href='/' className='absolute top-4 left-4'>
          <Logo className='sm:w-[64px] sm:h-[64px] w-[48px] h-[48px] ' />
        </Link>
        <div className='w-full h-full pt-32 sm:pt-48 px-4 sm:px-8'>
          <ul className={`transition-all duration-500 ease-in-out`}>
            {routes.map((route, index: number) => (
              <MenuItem
                key={route.href}
                isVisible={isOpen}
                index={index}
                variant='mobilemenu'
                onClick={() => setIsOpen(!isOpen)}
                {...route}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
