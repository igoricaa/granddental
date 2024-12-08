'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { type StaticImageData } from 'next/image';
import Subtitle from './UI/Subtitle';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import after1 from '@/../public/before-and-after/1.jpg';
import before1 from '@/../public/before-and-after/2.jpg';
import after2 from '@/../public/before-and-after/3.jpg';
import before2 from '@/../public/before-and-after/4.jpg';
import after3 from '@/../public/before-and-after/5.jpg';
import before3 from '@/../public/before-and-after/6.jpg';
import after4 from '@/../public/before-and-after/7.jpg';
import before4 from '@/../public/before-and-after/8.jpg';
import after5 from '@/../public/before-and-after/9.jpg';
import before5 from '@/../public/before-and-after/10.jpg';
import after6 from '@/../public/before-and-after/11.jpg';
import before6 from '@/../public/before-and-after/12.jpg';
import after7 from '@/../public/before-and-after/13.jpg';
import before7 from '@/../public/before-and-after/14.jpg';
import after8 from '@/../public/before-and-after/15.jpg';
import before8 from '@/../public/before-and-after/16.jpg';
import after9 from '@/../public/before-and-after/17.jpg';
import before9 from '@/../public/before-and-after/18.jpg';
import after10 from '@/../public/before-and-after/19.jpg';
import before10 from '@/../public/before-and-after/20.jpg';
import after11 from '@/../public/before-and-after/21.jpg';
import before11 from '@/../public/before-and-after/22.jpg';

const beforeAndAfterImages = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
  { before: before3, after: after3 },
  { before: before4, after: after4 },
  { before: before5, after: after5 },
  { before: before6, after: after6 },
  { before: before7, after: after7 },
  { before: before8, after: after8 },
  { before: before9, after: after9 },
  { before: before10, after: after10 },
  { before: before11, after: after11 },
];

const ImageComparison: React.FC<{ className?: string }> = ({ className }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: false,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

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

      <div className='aspect-[1000/600] max-w-[1000px] max-h-[600px] w-full h-full mx-auto mt-10 lg:mt-12 relative'>
        <div ref={sliderRef} className='keen-slider w-full h-full'>
          {beforeAndAfterImages.map((item, index) => (
            <BeforeAndAfterComponent
              key={index}
              index={index}
              beforeImage={item.before}
              afterImage={item.after}
              className={className}
            />
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className='flex items-center justify-center gap-1 mt-4'>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />
            <div className='flex lg:hidden justify-center py-3'>
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`border-none w-2 h-2 rounded-full bg-white/30 mx-1 p-1 cursor-pointer outline-none ${
                      currentSlide === idx ? '!bg-white' : ''
                    }`}
                  ></button>
                );
              })}
            </div>
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageComparison;

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

const BeforeAndAfterComponent = ({
  beforeImage,
  afterImage,
  initialPosition = 50,
  className,
  index,
}: ImageComparisonProps & { index: number }) => {
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
    <div
      ref={containerRef}
      className={`keen-slider__slide number-slide${index} relative select-none overflow-hidden ${className}`}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsResizing(false)}
    >
      <div className='absolute inset-0'>
        <Image
          src={afterImage}
          alt='Grand Dental klinika - pre i posle'
          fill
          className='object-cover'
          sizes={`(max-width: 991px) 100vw, 1000px`}
          placeholder='blur'
        />
      </div>

      <div
        className='absolute inset-0'
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt='Grand Dental klinika - pre i posle'
          fill
          className='object-cover'
          sizes={`(max-width: 991px) 100vw, 1000px`}
          placeholder='blur'
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
  );
};

function Arrow(props: {
  left?: boolean;
  onClick: (e: any) => void;
  className?: string;
}) {
  return (
    <svg
      onClick={props.onClick}
      className={`w-7 h-7 lg:w-10 lg:h-10 fill-white cursor-pointer lg:absolute lg:z-20 lg:top-1/2 lg:-translate-y-1/2 ${
        props.left ? 'lg:-left-16' : 'lg:-right-16'
      }  ${props.className}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}
