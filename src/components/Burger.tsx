'use client';
import SideArea from './SideArea';
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileMenu from './MobileMenu';
const Burger = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');

  return <>{isMobile ? <MobileMenu /> : <SideArea />}</>;
};

export default Burger;
