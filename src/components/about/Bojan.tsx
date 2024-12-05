'use client';

import Image from 'next/image';
import bojan from '@/../public/team/bojan-perduv.jpeg';
import bojan2 from '@/../public/team/bojan-perduv-2.jpeg';
import bojan3 from '@/../public/team/bojan-perduv-3.jpeg';
import { useInView } from 'react-intersection-observer';
import Subtitle from '../UI/Subtitle';

const Bojan = () => {
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: true });

  return (
    <div
      ref={ref}
      className='mt-28 lg:grid lg:grid-cols-12 lg:items-center max-w-8xl lg:mx-auto overflow-hidden'
    >
      <div
        className={`lg:col-span-6 lg:col-start-2 max-w-7xl bg-primary-default text-black px-4 py-12 sm:px-8 h-fit z-20 ${
          inView
            ? 'translate-y-0 opacity-100 visible blur-0'
            : 'translate-y-80 opacity-0 invisible blur-[2px]'
        } transition-all duration-[1500ms] ease-in-out`}
      >
        <Subtitle>glavni lik</Subtitle>
        <h2 className='text-4xl mt-5 underlined text-white'>dr Bojan Perduv</h2>
        <p className='mt-5'>
          Dr Bojan Perduv je osnivač Grand Dental ordinacije, glavni stomatolog
          sa višegodišnjim iskustvom u oblasti kompletne oralne rehabilitacije.
        </p>
        <p className='mt-4'>
          Rodjen je u Portugalu 1.11.1990. godine, završio je
          studije na Stomatološkom Fakultetu u Pančevu, a nastavio edukaciju na
          stomatološkom fakultetu u Portu, Portugalu. Dr Perduv i njegov tim se
          maksimalno trude da pruže bezbolnu i detaljnu zdravstvenu terapiju
          svojim pacijentima, koristeći najsavremenije metode i tehnike.
        </p>
      </div>
      <div className='relative lg:col-span-5 lg:col-start-8 lg:min-h-[800px] max-w-96 lg:max-w-none ml-auto lg:ml-0 sm:-translate-x-10 lg:-translate-x-20'>
        <div
          className={`absolute aspect-[544/800] w-64 top-10 left-16 ${
            inView
              ? 'translate-y-0 opacity-100 visible blur-0'
              : 'translate-y-80 opacity-0 invisible blur-[2px]'
          } transition-all duration-[1500ms] delay-[400ms] ease-in-out`}
        >
          <Image
            src={bojan}
            alt='Grand Dental klinika dr Bojan Perduv '
            fill
            sizes='(max-width: 1024px) 384px, 600px'
            priority
            className='object-cover'
          />
        </div>
        <div
          className={`absolute aspect-[544/800] w-64 top-40 -right-0 ${
            inView
              ? 'translate-y-0 opacity-100 visible blur-0'
              : 'translate-y-80 opacity-0 invisible blur-[2px]'
          } transition-all duration-[1500ms] delay-[400ms] ease-in-out`}
        >
          <Image
            src={bojan2}
            alt='Grand Dental klinika dr Bojan Perduv '
            fill
            sizes='(max-width: 1024px) 384px, 600px'
            priority
            className='object-cover'
          />
        </div>
        <div
          className={`absolute aspect-[544/800] w-64 -bottom-2 left-16 ${
            inView
              ? 'translate-y-0 opacity-100 visible blur-0'
              : 'translate-y-80 opacity-0 invisible blur-[2px]'
          } transition-all duration-[1500ms] delay-[400ms] ease-in-out`}
        >
          <Image
            src={bojan3}
            alt='Grand Dental klinika dr Bojan Perduv '
            fill
            sizes='(max-width: 1024px) 384px, 600px'
            priority
            className='object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Bojan;
