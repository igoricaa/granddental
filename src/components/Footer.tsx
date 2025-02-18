import { routes } from '@/app/utils/data';
import MenuItem from './MenuItem';
import { Link } from 'next-view-transitions';
import Logo from './UI/logo/logo';
import GoogleMap from './GoogleMap';

const Footer = () => {
  return (
    <footer className='justify-between px-8 sm:px-16 lg:px-[10vw] py-24 sm:py-32 bg-accent-default'>
      <div className='flex flex-col lg:flex-row gap-16 lg:gap-32'>
        <Link href='/'>
          <Logo className='w-40 h-40 lg:w-52 lg:h-52' />
        </Link>
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-8 sm:gap-16 lg:gap-32'>
          <div className='flex-1 sm:flex-none'>
            <p className='font-joan font-bold text-2xl lg:text-3xl uppercase'>
              Meni
            </p>
            <ul className='mt-6 lg:mt-8 flex flex-col gap-2'>
              {routes.map((route) => (
                <MenuItem key={route.href} {...route} variant='footer' />
              ))}
            </ul>
          </div>
          <div className='flex-1 sm:flex-none'>
            <p className='font-joan font-bold text-2xl lg:text-3xl uppercase'>
              Kontakt
            </p>
            <div className='relative w-fit'>
              <p className='mt-6 lg:mt-8 cursor-pointer hover:opacity-80'>
                info@granddental.rs
              </p>
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
                className='font-bold bg-primary-default w-fit px-2 py-1'
              >
                Instagram
              </Link>
            </div>
          </div>

          <div className='flex-1 w-full basis-full'>
            <p className='font-joan font-bold text-2xl lg:text-3xl uppercase'>
              Posetite nas:
            </p>
            <GoogleMap className='aspect-[1235/647] rounded-[30px] w-full lg:w-[450px] mt-6 sm:mt-10 lg:mt-10' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
