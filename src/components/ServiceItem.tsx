'use client';

import Image, { StaticImageData } from 'next/image';
import Button from './UI/Button';
import Subtitle from './UI/Subtitle';
import { useInView } from 'react-intersection-observer';

type ServiceItemProps = {
  subtitle: string;
  title: string;
  description1: string;
  description2?: string;
  description3?: string;
  buttonText: string;
  image1: StaticImageData;
  image2: StaticImageData;
  invert?: boolean;
  className?: string;
};

const ServiceItem = ({
  subtitle,
  title,
  description1,
  description2,
  description3,
  buttonText,
  image1,
  image2,
  invert = false,
  className,
}: ServiceItemProps) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`flex items-center justify-center mt-40 ${
        invert ? 'flex-row-reverse' : ''
      } ${className}`}
    >
      <div
        className={`flex flex-col justify-center items-start bg-primary-default ${invert ? 'pr-16 pl-32' : 'pl-16 pr-32'} py-16 w-[50vw] max-w-5xl min-w-[600px] min-h-[560px] text-textDark ${
          inView
            ? 'translate-x-0 opacity-100 visible'
            : `${
                invert ? 'translate-x-80' : '-translate-x-80'
              } opacity-0 invisible`
        } transition-all duration-[1500ms] ease-in-out`}
      >
        <Subtitle variant='secondary'>{subtitle}</Subtitle>
        <h3 className='text-4xl text-white mt-6'>{title}</h3>
        <p className='mt-8'>{description1}</p>
        {description2 && <p className='mt-6'>{description2}</p>}
        {description3 && <p className='mt-6'>{description3}</p>}

        <Button href='/kontakt' variant='secondary' className='mt-8'>
          {buttonText}
        </Button>
      </div>

      <div
        className={`relative z-10 flex-1 aspect-[700/467] min-w-[600px] max-w-[700px] group transition-all duration-1000 ease-in-out overflow-hidden ${invert ? 'translate-x-24' : '-translate-x-24'} ${
          inView
            ? 'translate-y-0 opacity-100 visible'
            : 'translate-y-80 opacity-0 invisible'
        }`}
      >
        <Image
          src={image1}
          alt={`${title} u Grand Dentalu`}
          fill
          className='object-cover translate-y-0 group-hover:translate-y-full transition-all duration-300 ease-in-out'
        />
        <Image
          src={image2}
          alt={`${title} u Grand Dentalu`}
          fill
          className='object-cover -translate-y-full group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out'
        />
      </div>
    </article>
  );
};

export default ServiceItem;
