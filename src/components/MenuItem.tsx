'use client';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

const BASE_LINK_STYLES = `
  relative inline-block lg:text-white/50 uppercase tracking-[0.05em] pb-1 z-5
  bg-[length:0%_2px] bg-no-repeat bg-[position:0_100%]
  transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s, 0s]
  hover:bg-[length:100%_2px] hover:bg-[position:100%_100%] hover:text-white
`;

const HEADER_LINK_STYLES = `text-[14px] text-white/50 pb-1 z-5
  transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s, 0s]
  hover:bg-[length:100%_2px] hover:bg-[position:100%_100%] hover:text-white`;

const FOOTER_LINK_STYLES = `text-base lg:text-[14px] text-white lg:text-white/50 mt-0 lg:mt-0 pb-1 z-5
  transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s, 0s]
  `;

const MOBILE_MENU_LINK_STYLES = `text-2xl sm:text-5xl lg:text-[14px] lg:text-white/50 mt-4 sm:mt-6 lg:mt-0 pb-1 z-5
  transition-[background-size,background-position,color, max-height] duration-300 delay-[0s,0.3s, 0s, 0s]`;

const getGradientStyle = (variant: 'header' | 'footer' | 'mobilemenu') =>
  variant === 'header' || variant === 'mobilemenu'
    ? 'bg-[linear-gradient(#29a0a5_0_0)]'
    : 'bg-[linear-gradient(#eec088_0_0)]';

const MenuItem = ({
  name,
  href,
  variant = 'header',
  isVisible,
  index,
  onClick,
}: {
  name: string;
  href: string;
  variant?: 'header' | 'footer' | 'mobilemenu';
  isVisible?: boolean;
  index?: number;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const gradientStyle = getGradientStyle(variant);

  return (
    <li
      style={{
        transitionDelay: `0s, ${(index || 0) * 0.2}s, ${(index || 0) * 0.2}s, ${
          (index || 0) * 0.2
        }s, ${(index || 0) * 0.2}s`,
      }}
      className={`relative group ${
        variant === 'mobilemenu' &&
        `transition-[max-height,opacity,visibility,transform,blur] ease-[cubic-bezier(0.76, 0, 0.24, 1)]  ${
          isVisible
            ? 'opacity-100 visible translate-y-0 blur-0 duration-500'
            : 'opacity-0 invisible translate-y-20 blur-[2px] duration-1000'
        }`
      }`}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`
          ${
            variant === 'mobilemenu'
              ? MOBILE_MENU_LINK_STYLES
              : variant === 'footer'
              ? FOOTER_LINK_STYLES
              : HEADER_LINK_STYLES
          }
          ${BASE_LINK_STYLES}
          ${gradientStyle}
          ${
            isActive &&
            'hover:bg-[length:100%_2px] [&]:bg-[length:100%_2px] !text-white'
          }
        `}
      >
        {name}
      </Link>
    </li>
  );
};

export default MenuItem;
