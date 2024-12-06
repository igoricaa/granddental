import Image from 'next/image';
import Button from './UI/Button';
import heroImage from '@/../public/hero.jpeg';

const Hero = () => {
  return (
    <section className='relative w-full h-[60svh] lg:h-[100svh] flex flex-col justify-end pt-0 px-4 sm:px-16 sm:pb-40 lg:px-44 lg:pb-24 text-white before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[110vw] before:h-[calc(100svh+2px)] before:z-10 before:bg-background hero-clip-path overflow-hidden'>
      <Image
        src={heroImage}
        alt='Grand Dental klinika'
        fill
        sizes='100vw'
        quality={85}
        priority
        className='object-contain lg:object-cover object-top lg:object-[100%_30%] lg:height-750:object-[100%_20%] aspect-[828/552] lg:aspect-auto max-w-full'
      />
      <h1 className='text-5xl lg:text-6xl z-10'>Dobrodošli u Grand Dental</h1>
      <h4 className='mt-4 text-2xl z-10'>
        Naša misija je da vam stvorimo holivudski osmeh, bez filtera.
      </h4>
      <Button href='/kontakt' className='mt-8 z-10'>
        Zakažite pregled
      </Button>
    </section>
  );
};

export default Hero;
