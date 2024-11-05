import Image from 'next/image';
import logo from '@/../public/logos/logo.png';
import { routes } from '@/app/utils/data';
import MenuItem from './MenuItem';
import { Link } from 'next-view-transitions';

const Footer = () => {
  return (
    <footer className='justify-between px-8 md:px-16 lg:px-[10vw] py-16 md:py-20 lg:py-32 bg-accent-default'>
      <div className='flex flex-col lg:flex-row gap-16 lg:gap-32'>
        <div className='w-40 h-40 lg:w-52 lg:h-52 relative'>
          <Image src={logo} alt='logo' fill className='object-cover' />
        </div>
        <div className='flex flex-row justify-between md:gap-8 lg:gap-32'>
          <div className='flex-1'>
            <h4 className='font-bold text-2xl lg:text-3xl uppercase'>Meni</h4>
            <ul className='mt-6 lg:mt-8 flex flex-col gap-2'>
              {routes.map((route) => (
                <MenuItem key={route.href} {...route} variant='footer' />
              ))}
            </ul>
          </div>
          <div className='flex-1'>
            <h4 className='font-bold text-2xl lg:text-3xl uppercase'>Kontakt</h4>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
