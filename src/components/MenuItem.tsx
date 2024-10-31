'use client';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

const BASE_LINK_STYLES = `
  relative inline-block text-[14px] text-white/50 uppercase tracking-[0.05em] pb-1 z-5
  bg-[length:0%_2px] bg-no-repeat bg-[position:0_100%]
  transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s]
  hover:bg-[length:100%_2px] hover:bg-[position:100%_100%] hover:text-white
`;

const getGradientStyle = (variant: 'header' | 'footer') =>
  variant === 'header'
    ? 'bg-[linear-gradient(#29a0a5_0_0)]'
    : 'bg-[linear-gradient(#eec088_0_0)]';

const SubMenuItem = memo(
  ({
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
        transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s]
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
  )
);
SubMenuItem.displayName = 'SubMenuItem';

const MenuItem = memo(
  ({
    name,
    href,
    submenu,
    variant = 'header',
  }: {
    name: string;
    href: string;
    submenu?: { name: string; href: string }[];
    variant?: 'header' | 'footer';
  }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const gradientStyle = getGradientStyle(variant);

    return (
      <li className='relative group'>
        {submenu ? (
          <span className={`${BASE_LINK_STYLES} ${gradientStyle}`}>{name}</span>
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
            {variant === 'header' && (
              <div className='absolute h-4 w-full -bottom-4' />
            )}
            <ul
              className={`
            ${variant === 'header' ? 'absolute hidden mt-1' : ''}
            group-hover:block min-w-[200px] bg-accent-default px-4 py-2
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
  }
);
MenuItem.displayName = 'MenuItem';

export default MenuItem;
