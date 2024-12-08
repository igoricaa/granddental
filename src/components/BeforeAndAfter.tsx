'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { type StaticImageData } from 'next/image';
import Subtitle from './UI/Subtitle';

interface ImageComparisonProps {
  beforeImage: string | StaticImageData;
  afterImage: string | StaticImageData;
  initialPosition?: number;
  className?: string;
}

interface Position {
  x: number;
  percentage: number;
}

const ImageComparison: React.FC<ImageComparisonProps> = ({
  beforeImage,
  afterImage,
  initialPosition = 50,
  className = '',
}) => {
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(initialPosition);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const calculatePosition = (pageX: number): Position => {
    if (!containerRef.current) {
      return { x: 0, percentage: initialPosition };
    }

    const rect = containerRef.current.getBoundingClientRect();
    const x = pageX - rect.left;
    const percentage = Math.min(Math.max(0, (x / rect.width) * 100), 100);

    return { x, percentage };
  };

  useEffect(() => {
    const handleResize = (e: MouseEvent): void => {
      if (!isResizing) return;
      e.preventDefault();
      const { percentage } = calculatePosition(e.pageX);
      setPosition(percentage);
    };

    const handleMouseUp = (): void => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleResize);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const handleTouchMove = (e: React.TouchEvent): void => {
    if (!isResizing) return;
    e.preventDefault();
    const touch = e.touches[0];
    const { percentage } = calculatePosition(touch.pageX);
    setPosition(percentage);
  };

  return (
    <section
      className={`flex flex-col items-center relative max-w-8xl mx-auto px-4 sm:px-8 lg:px-0 my-24 sm:my-12 lg:my-28 ${className}`}
    >
      <Subtitle>Rezultati</Subtitle>
      <h2 className='text-5xl underlined mt-5'>Pre i posle nas</h2>
      <p className='mt-6 text-xl lg:text-2xl'>
        Pogledajte neke od primera naših radova i uverite se sami u kvalitet
        naših usluga.
      </p>

      <div
        ref={containerRef}
        className='relative mx-auto select-none overflow-hidden bg-gray-100 mt-10 lg:mt-12 w-full h-full aspect-[1000/600] max-w-[1000px] max-h-[600px]'
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsResizing(false)}
      >
        <div className='absolute inset-0'>
          <Image
            src={afterImage}
            alt='Grand Dental rezultati'
            quality={90}
            priority
            fill
            className='object-cover'
            sizes={`(max-width: 991px) 100vw, 1000px`}
          />
        </div>

        <div
          className='absolute inset-0'
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt='Grand Dental rezultati'
            quality={90}
            priority
            fill
            className='object-cover'
            sizes={`(max-width: 991px) 100vw, 1000px`}
          />
        </div>

        <div
          className='absolute inset-y-0 transition-transform duration-75'
          style={{ left: `${position}%` }}
        >
          <div className='absolute inset-y-0 -ml-px w-0.5 bg-white shadow-lg' />
          <button
            type='button'
            aria-label='Comparison slider'
            className='absolute top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200'
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
          >
            <svg
              className='w-4 h-4 text-gray-600 rotate-90'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 9l4-4 4 4m0 6l-4 4-4-4'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageComparison;
