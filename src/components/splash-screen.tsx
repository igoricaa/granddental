'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import Logo from './UI/logo/logo';

const SplashScreen = () => {
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime();

    if (!lastVisit || now - parseInt(lastVisit) > 12 * 60 * 60 * 1000) {
      setShowSplashScreen(true);
      localStorage.setItem('lastVisit', now.toString());
    }

    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3700);
  }, []);

  useEffect(() => {
    document.body.toggleAttribute('data-lenis-prevent', showSplashScreen);
    document.body.style.overflow = showSplashScreen ? 'hidden' : '';
    document.body.style.maxHeight = showSplashScreen ? '100vh' : '';
    document.body.style.touchAction = showSplashScreen ? 'none' : '';
  }, [showSplashScreen]);

  return (
    showSplashScreen && (
      <div
        className={`fixed inset-0 z-[1000] w-screen h-screen flex items-center gap-x-16 lg:gap-x-20 justify-center bg-background animate-fadeOut pointer-events-none`}
      >
        <div className='absolute lg:animate-appear flex flex-col items-center lg:flex-row gap-y-4 sm:gap-y-10'>
          <Logo className='w-20 sm:w-48 lg:w-56 h-fit lg:left-auto lg:translate-x-0 lg:top-0 animate-fadeIn lg:animate-none' />
          <p className='lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-64 whitespace-nowrap text-white text-4xl sm:text-6xl lg:text-7xl font-joan [clip-path:polygon(0_0,0_0,0_100%,0%_100%)] animate-reveal'>
            Grand Dental Clinic
          </p>
        </div>
      </div>
    )
  );
};

export default SplashScreen;
