import Image from 'next/image';
import Button from './UI/Button';
import heroImage from '@/../public/hero.png';

const Hero = () => {
  return (
    <section className='relative w-full h-[80svh] flex flex-col justify-end pt-0 px-4 md:px-16 md:pb-40 lg:px-44 lg:pb-24 text-white'>
      <Image
        src={heroImage}
        alt='Grand Dental klinika'
        fill
        sizes='100vw'
        priority
        className='object-cover -z-10'
      />
      <h1 className='text-6xl'>Dobrodošli u Grand Dental</h1>
      <h4 className='mt-4 text-2xl'>
        Naša misija je da vam stvorimo holivudski osmeh, bez filtera.
      </h4>
      <Button href='/kontakt' className='mt-8'>
        Zakažite pregled
      </Button>
    </section>
  );
};

export default Hero;
