import Image from 'next/image';
import logo from '@/../public/logos/logo.png';
import Button from './UI/Button';
import MenuItem from './MenuItem';
import BurgerMenu from './BurgerMenu';

const routes = [
  {
    name: 'Početna',
    href: '/',
  },
  {
    name: 'O nama',
    href: '/o-nama',
  },
  {
    name: 'Usluge',
    href: '/usluge',
    submenu: [
      {
        name: 'Implantologija',
        href: '/#implantologija',
      },
      {
        name: 'Protetika',
        href: '/#protetika',
      },
    ],
  },
  {
    name: 'Dentalni turizam',
    href: '/dentalni-turizam',
  },
  {
    name: 'Kontakt',
    href: '/kontakt',
  },
];

const Header = () => {
  return (
    <header className='pt-4 pb-8 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 bg-gradient-to-b from-black/60 to-transparent'>
      <div className='flex items-center justify-between gap-14'>
        <div className='w-[88px] h-[88px] relative '>
          <Image src={logo} alt='logo' fill className='object-cover' />
        </div>
        <ul className='flex items-center gap-8'>
          {routes.map((route) => (
            <MenuItem key={route.href} {...route} />
          ))}
        </ul>
      </div>
      <div className='flex items-center gap-12'>
        <Button href='/kontakt'>Zakažite pregled</Button>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
