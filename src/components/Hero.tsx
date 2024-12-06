import Image from 'next/image';
import Button from './UI/Button';
import heroImage from '@/../public/hero.jpeg';

const Hero = () => {
  return (
    <section className='relative w-full lg:h-[100svh] sm:flex flex-col justify-end lg:px-44 lg:pb-12 3xl:pb-24 text-white before:hidden lg:before:block before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[110vw] before:h-[calc(100svh+2px)] before:z-10 before:bg-background hero-clip-path overflow-hidden'>
      <div className='relative lg:absolute inset-0 w-full h-[calc(552/828*100vw)] lg:h-full'>
        <Image
          src={heroImage}
          alt='Grand Dental klinika'
          fill
          sizes='100vw'
          quality={85}
          priority
          className='object-cover object-[center_-20px] sm:object-[center_-50px] lg:object-[center_100%] aspect-[828/552] lg:aspect-auto max-w-full'
        />
      </div>
      <div className='px-4 sm:px-8 lg:px-0 z-10'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl'>Dobrodošli u Grand Dental</h1>
        <h4 className='mt-3 sm:mt-4 text-xl sm:text-2xl'>
          Naša misija je da vam stvorimo holivudski osmeh, bez filtera.
        </h4>
        <Button href='/kontakt' className='mt-6 lg:mt-8'>
          Zakažite pregled
        </Button>
      </div>
    </section>
  );
};

export default Hero;
