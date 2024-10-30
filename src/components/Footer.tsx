import Image from 'next/image';
import logo from '@/../public/logos/logo.png';
import { routes } from '@/app/data';
import MenuItem from './MenuItem';
import { Link } from 'next-view-transitions';

const Footer = () => {
  return (
    <footer className='justify-between px-60 py-32 bg-accent-default'>
      <div className='flex gap-32'>
        <div className='w-52 h-52 relative'>
          <Image src={logo} alt='logo' fill className='object-cover' />
        </div>
        <div>
          <h4 className='font-bold text-3xl uppercase'>Menu</h4>
          <ul className='mt-8 flex flex-col gap-2'>
            {routes.map((route) => (
              <MenuItem key={route.href} {...route} variant='footer' />
            ))}
          </ul>
        </div>
        <div>
          <h4 className='font-bold text-3xl uppercase'>Kontakt</h4>
          <div className='relative w-fit'>
            <p className='mt-8 cursor-pointer hover:opacity-80'>
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
    </footer>
  );
};

export default Footer;
