'use client';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MenuItem = ({
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
  const [borderWidth, setBorderWidth] = useState('2px');
  const [borderOffset, setBorderOffset] = useState('1');

  useEffect(() => {
    setBorderWidth(variant === 'header' ? '2px' : '1px');
    setBorderOffset(variant === 'header' ? '1' : '2px');
  }, [variant]);

  return (
    <li className='relative group'>
      {submenu ? (
        <span
          className={`relative inline-block text-[14px] text-white/50 uppercase tracking-[0.05em] pb-${borderOffset} pb- z-5
            ${
              variant === 'header'
                ? 'bg-[linear-gradient(#29a0a5_0_0)]'
                : 'bg-[linear-gradient(#eec088_0_0)]'
            }
             bg-[length:0%_2px] bg-no-repeat bg-[position:0_100%] 
            transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s] 
            hover:bg-[length:100%_${borderWidth}] hover:bg-[position:100%_100%] hover:text-white`}
        >
          {name}
        </span>
      ) : (
        <Link
          href={href}
          className={`relative inline-block text-[14px] text-white/50 uppercase tracking-[0.05em] pb-${borderOffset} pb- z-5
            ${
              variant === 'header'
                ? 'bg-[linear-gradient(#29a0a5_0_0)]'
                : 'bg-[linear-gradient(#eec088_0_0)]'
            }
             bg-[length:0%_2px] bg-no-repeat bg-[position:0_100%] 
            transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s] 
            hover:bg-[length:100%_${borderWidth}] hover:bg-[position:100%_100%] hover:text-white ${
            isActive
              ? `hover:bg-[length:100%_${borderWidth}] [&]:bg-[length:100%_${borderWidth}] !text-white`
              : ''
          }`}
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
            className={`${
              variant === 'header' ? 'absolute hidden mt-1' : ''
            }  group-hover:block min-w-[200px] bg-accent-default  px-4 py-2`}
          >
            {submenu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative inline-block py-1 text-xs uppercase tracking-wider ${
                    variant === 'header'
                      ? 'text-white bg-[linear-gradient(#fff_0_0)]'
                      : 'bg-[linear-gradient(#eec088_0_0)] text-white/50 hover:text-white'
                  }
                     bg-[length:0%_1px] bg-no-repeat bg-[position:0_100%] 
                    transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s] 
                    hover:bg-[length:100%_1px] hover:bg-[position:100%_100%] ${
                      pathname === item.href
                        ? 'hover:bg-[length:100%_1px] [&]:bg-[length:100%_1px]'
                        : ''
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

export default MenuItem;
