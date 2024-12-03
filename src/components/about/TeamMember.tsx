'use client';

import { TeamMemberType } from '@/app/utils/data';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const TeamMember = ({
  member,
  index,
}: {
  member: TeamMemberType;
  index: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 200}ms` }}
      className={`relative group ${
        inView
          ? 'translate-y-0 opacity-100 visible'
          : 'translate-y-20 opacity-0 invisible'
      } transition-all duration-1000 ease-in-out`}
    >
      <div className='absolute inset-0 bg-black opacity-0 invisible group-hover:visible group-hover:opacity-35 transition-all duration-300 ease-in-out z-10'></div>
      <div className='relative aspect-[2/3] transition-all duration-300 ease-in-out'>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes='(max-width: 768px) 50vw,(max-width: 1440px) 33vw, 480px'
          className='object-cover'
        />
      </div>
      <h4 className='text-2xl mt-4 underlined !absolute bottom-6 right-4 lg:bottom-8 lg:right-8 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out z-20'>
        {member.name}
      </h4>
    </div>
  );
};

export default TeamMember;
