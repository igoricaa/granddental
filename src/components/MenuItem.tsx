'use client';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

const MenuItem = ({
  name,
  href,
  submenu,
}: {
  name: string;
  href: string;
  submenu?: { name: string; href: string }[];
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className='relative group'>
      <Link
        href={href}
        className={`relative inline-block text-[14px] text-white/50 uppercase tracking-[0.05em] pb-1 z-5
          bg-[linear-gradient(#29a0a5_0_0)] bg-[length:0%_2px] bg-no-repeat bg-[position:0_100%] 
          transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s] 
          hover:bg-[length:100%_2px] hover:bg-[position:100%_100%] hover:text-white ${
            isActive
              ? 'hover:bg-[length:100%_2px] [&]:bg-[length:100%_2px] !text-white'
              : ''
          }`}
      >
        {name}
      </Link>

      {submenu && (
        <>
          <div className='absolute h-4 w-full -bottom-4' />
          <ul className='absolute hidden group-hover:block min-w-[200px] bg-accent-default mt-1 px-4 py-2'>
            {submenu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative inline-block py-1 text-xs uppercase tracking-wider text-white
                    bg-[linear-gradient(#fff_0_0)] bg-[length:0%_1px] bg-no-repeat bg-[position:0_100%] 
                    transition-[background-size,background-position,color] duration-300 delay-[0s,0.3s] 
                    hover:bg-[length:100%_1px] hover:bg-[position:100%_100%] ${
                      pathname === item.href ? 'hover:bg-[length:100%_1px] [&]:bg-[length:100%_1px]' : ''
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
