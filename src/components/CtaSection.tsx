import Image from 'next/image';
import Button from './UI/Button';
import ctaImage1 from '@/../public/contact-1.jpeg';
import ctaImage2 from '@/../public/contact-2.jpeg';

const CtaSection = () => {
  return (
    <section className='px-10 py-56 relative flex flex-col items-center justify-center max-w-8xl mx-auto'>
      <Image
        src={ctaImage1}
        alt='cta'
        width={400}
        height={400}
        className='absolute top-8 left-0 object-cover max-h-[400px]'
      />
      <Image
        src={ctaImage2}
        alt='cta'
        width={400}
        height={400}
        className='absolute bottom-8 right-0 object-cover max-h-[400px]'
      />
      <h2 className='text-5xl underlined tworows text-center '>
        Zakoračite u svet savršenog osmeha - zakažite online
        <br />
        pregled i krenite ka svom Hollywood Smile-u već danas!
      </h2>
      <p className='mt-10 text-2xl'>
        Ukoliko imate bilo kakva pitanja slobodno nas kontaktirajte!
      </p>
      <Button href='/kontakt' className='mx-auto mt-12'>
        Kontaktirajte nas
      </Button>
    </section>
  );
};

export default CtaSection;
