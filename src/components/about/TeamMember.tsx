'use client';

import { TeamMemberType } from '@/app/data';
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
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`relative group ${
        inView
          ? 'translate-y-0 opacity-100 visible'
          : 'translate-y-20 opacity-0 invisible'
      } transition-all duration-1000 delay-[${index * 100}ms] ease-in-out`}
    >
      <div className='relative aspect-[2/3]'>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes='(max-width: 768px) 100vw, 33vw'
          className='object-cover'
        />
      </div>
      <h4 className='text-2xl mt-4 underlined !absolute bottom-8 right-8 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
        {member.name}
      </h4>
    </div>
  );
};

export default TeamMember;
