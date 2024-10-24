import Image from 'next/image';
import dentalTourismImage from '@/../public/belgrade.png';
import marcoDentalLogo from '@/../public/logos/marcodentaltourism-logo.png';
import Subtitle from './UI/Subtitle';
import Button from './UI/Button';

const DentalTourismSection = () => {
  return (
    <section className='px-20 pt-40 pb-20 h-[450px] relative flex items-center gap-10'>
      <Image
        src={dentalTourismImage}
        alt='Grand Dental klinika dentalni turizam'
        fill
        className='object-cover -z-10'
        sizes='100vw'
      />

        <Image
          src={marcoDentalLogo}
          alt='marco dental tourism'
          width={160}
          height={160}
          className='object-cover'
        />

      <div className='max-w-screen-xl'>
        <Subtitle variant='secondary'>Dentalni turizam</Subtitle>
        <h2 className='text-5xl underlined mt-4'>Dentalni turizam</h2>
        <div className='flex gap-8 items-start mt-6'>
          <div>
            <p>
              Za pacijente koji nisu iz Beograda, razvili smo jedinstven program
              dentalnog turizma koji omogućava da vrhunski tretmani budu
              dostupni bez ikakve brige. Naš specijalizovani tim je posvećen
              tome da svaki korak - od vašeg dolaska do završetka tretmana -
              bude maksimalno lak i ugodan. Organizujemo vaš dolazak, smeštaj i
              sve što je potrebno, kako biste vi mogli da se opustite i
              fokusirate na novi osmeh.
            </p>
            <p className='mt-6'>
              Pružamo ne samo najbolju dentalnu negu, već i potpuno prilagođeno
              iskustvo koje garantuje vrhunske rezultate bez stresa. Uz nas, put
              do savršenog osmeha je jednostavan i prijatan - samo zakoračite!
            </p>
          </div>
          <Button href='https://www.marcodentaltourism.com/' externalLink>
            Saznajte više
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DentalTourismSection;
