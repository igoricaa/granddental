'use client';
import { useState } from 'react';
import SideArea from './SideArea';

const BurgerMenu = () => {
  const [isSideAreaOpen, setIsSideAreaOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsSideAreaOpen(!isSideAreaOpen)}
        className='p-2 hover:opacity-70 transition-opacity relative z-50'
      >
        <div className='w-6 h-6 flex flex-col justify-center gap-[6px]'>
          <span
            className={`block w-full h-[2px] bg-current transition-transform duration-300 origin-center ${
              isSideAreaOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-full h-[2px] bg-current transition-transform duration-300 ${
              isSideAreaOpen ? 'scale-0' : 'scale-100'
            }`}
          />
          <span
            className={`block w-full h-[2px] bg-current transition-transform duration-300 origin-center ${
              isSideAreaOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      <SideArea
        isOpen={isSideAreaOpen}
        onClose={() => setIsSideAreaOpen(false)}
      />
    </>
  );
};

export default BurgerMenu;
