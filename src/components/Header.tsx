import Image from 'next/image';
import logo from '@/../public/logos/logo.png';
import Button from './UI/Button';
import MenuItem from './MenuItem';
import Burger from './Burger';
import { routes } from '@/app/utils/data';
import { Link } from 'next-view-transitions';

const Header = () => {
  return (
    <header className='px-4 md:px-8 lg:px-12 pt-4 pb-8 fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent'>
      <div className='flex items-center justify-between gap-14'>
        <Link
          href='/'
          className='lg:w-[88px] lg:h-[88px] md:w-[64px] md:h-[64px] w-[48px] h-[48px] relative z-50'
        >
          <Image
            src={logo}
            alt='logo'
            fill
            sizes='(max-width: 768px) 48px, (max-width: 1024px) 64px, 88px'
            priority
            quality={100}
            className='object-cover'
          />
        </Link>
        <ul className='hidden lg:flex items-center gap-8'>
          {routes.map((route) => (
            <MenuItem key={route.href} {...route} />
          ))}
        </ul>
      </div>
      <div className='flex items-center lg:gap-12 md:gap-8 gap-6'>
        <Button variant='accented' href='/kontakt' className='hidden lg:block'>
          Zakažite pregled
        </Button>
        <Burger />
      </div>
    </header>
  );
};

export default Header;
