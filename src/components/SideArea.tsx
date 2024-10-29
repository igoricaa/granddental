'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/../public/logos/logo.png';

interface SideAreaProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideArea = ({ isOpen, onClose }: SideAreaProps) => {
  const [showCopyBanner, setShowCopyBanner] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@granddental.rs');
    setShowCopyBanner(true);
    setTimeout(() => setShowCopyBanner(false), 2000);
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black transition-[opacity, visibility] duration-1000 z-[24] ${
          isOpen ? 'opacity-50 block' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 z-[25] bg-background max-w-[537px] w-full h-screen transition-all duration-500 ease-in-out p-[10vh_4rem_2rem] ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        }`}
      >
        <Link href='/' className='block w-36'>
          <Image src={logo} alt='Grand Dental Logo' width={144} height={144} />
        </Link>

        <h4 className='mt-8 font-bold text-xl'>Kontakt:</h4>
        <div className='relative w-fit'>
          <p
            className='mt-4 cursor-pointer hover:opacity-80'
            onClick={handleCopyEmail}
          >
            info@granddental.rs
          </p>
          {showCopyBanner && (
            <div className='absolute -right-4 -top-8 bg-accent-default px-2 py-1 text-sm rounded'>
              Copied!
            </div>
          )}
        </div>

        <div className='mt-4 flex flex-col gap-4'>
          <a href='tel:00381616589540'>+381 61 6589540</a>
          <Link
            href='https://maps.app.goo.gl/oaGSsDv5sXSLcgjx5'
            target='_blank'
          >
            Loznička 13, Beograd
          </Link>
          <Link
            href='https://www.instagram.com/grand_dentaltourism/'
            target='_blank'
            className='font-bold bg-accent-default w-fit px-2 py-1'
          >
            Instagram
          </Link>
        </div>

        <div className='mt-8 aspect-video w-full bg-gray-200'>
          {/* Add your Google Maps component here */}
        </div>
      </div>
    </>
  );
};

export default SideArea;
