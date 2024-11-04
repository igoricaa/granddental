'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

const BASE_LINK_STYLES = `
  relative inline-block text-2xl md:text-5xl lg:text-[14px] text-white/50 uppercase tracking-[0.05em] mt-4 md:mt-6 lg:mt-0 pb-1 z-5
  bg-[length:0%_2px] bg-no-repeat bg-[position:0_100%]
  transition-[background-size,background-position,color, max-height] duration-300 delay-[0s,0.3s, 0s, 0s]
  hover:bg-[length:100%_2px] hover:bg-[position:100%_100%] hover:text-white
`;

const getGradientStyle = (variant: 'header' | 'footer') =>
  variant === 'header'
    ? 'bg-[linear-gradient(#29a0a5_0_0)]'
    : 'bg-[linear-gradient(#eec088_0_0)]';

const SubMenuItem = ({
  item,
  variant,
  pathname,
}: {
  item: { name: string; href: string };
  variant: 'header' | 'footer';
  pathname: string;
}) => (
  <li key={item.href}>
    <Link
      href={item.href}
      className={`
      relative inline-block py-1 text-xs uppercase tracking-wider
      ${
        variant === 'header'
          ? 'text-white bg-[linear-gradient(#fff_0_0)]'
          : 'bg-[linear-gradient(#eec088_0_0)] text-white/50 hover:text-white'
      }
      bg-[length:0%_1px] bg-no-repeat bg-[position:0_100%]
      transition-[background-size,background-position,color, max-height] duration-300 delay-[0s,0.3s, 0s, 0s]
      hover:bg-[length:100%_1px] hover:bg-[position:100%_100%]
      ${
        pathname === item.href
          ? 'hover:bg-[length:100%_1px] [&]:bg-[length:100%_1px]'
          : ''
      }
    `}
    >
      {item.name}
    </Link>
  </li>
);

const MenuItem = ({
  name,
  href,
  submenu,
  variant = 'header',
  isVisible,
  index,
  isSubmenuOpen,
  setIsSubmenuOpen,
}: {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
  variant?: 'header' | 'footer';
  isVisible?: boolean;
  index?: number;
  isSubmenuOpen?: boolean;
  setIsSubmenuOpen?: (isOpen: boolean) => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const gradientStyle = getGradientStyle(variant);
  const isMobile = useMediaQuery('(max-width: 991px)');

  const handleSubmenuClick = () => {
    if (isMobile) {
      setIsSubmenuOpen?.(!isSubmenuOpen);
    }
  };

  return (
    <li
      style={{
        transitionDelay: `0s, ${(index || 0) * 0.2}s, ${(index || 0) * 0.2}s, ${
          (index || 0) * 0.2
        }s, ${(index || 0) * 0.2}s`,
      }}
      className={`relative group ${
        isMobile
          ? `transition-[max-height,opacity,visibility,transform,blur] ease-[cubic-bezier(0.76, 0, 0.24, 1)]  ${
              isVisible
                ? 'opacity-100 visible translate-y-0 blur-0 duration-500'
                : 'opacity-0 invisible translate-y-20 blur-[2px] duration-1000'
            }
            ${submenu ? (isSubmenuOpen ? 'max-h-[120px]' : 'max-h-[52px]') : ''}
            `
          : ''
      }`}
    >
      {submenu ? (
        <span
          className={`${BASE_LINK_STYLES} ${gradientStyle} cursor-pointer`}
          onClick={handleSubmenuClick}
        >
          {name}
        </span>
      ) : (
        <Link
          href={href}
          className={`
          ${BASE_LINK_STYLES}
          ${gradientStyle}
          ${
            isActive
              ? 'hover:bg-[length:100%_2px] [&]:bg-[length:100%_2px] !text-white'
              : ''
          }
        `}
        >
          {name}
        </Link>
      )}

      {submenu && (
        <>
          {variant === 'header' && !isMobile && (
            <div className='absolute h-4 w-full -bottom-4' />
          )}
          <ul
            className={`
              ${variant === 'header' && !isMobile ? 'absolute hidden mt-1' : ''}
              ${
                isMobile
                  ? `mt-2 transition-all ${
                      isSubmenuOpen
                        ? 'opacity-100 visible duration-500 delay-150'
                        : 'opacity-0 invisible duration-150'
                    }`
                  : 'group-hover:block'
              }
              min-w-[200px] bg-accent-default px-4 py-2
            `}
          >
            {submenu.map((item) => (
              <SubMenuItem
                key={item.href}
                item={item}
                variant={variant}
                pathname={pathname}
              />
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

export default MenuItem;
