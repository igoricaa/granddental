'use client';

import Image, { StaticImageData } from 'next/image';
import Button from './UI/Button';
import Subtitle from './UI/Subtitle';
import { useInView } from 'react-intersection-observer';

type ServiceItemProps = {
  id: string;
  subtitle: string;
  title: string;
  description: string[];
  buttonText: string;
  image1: StaticImageData;
  image2: StaticImageData;
  invert?: boolean;
  className?: string;
};

const ServiceItem = ({
  id,
  subtitle,
  title,
  description,
  buttonText,
  image1,
  image2,
  invert = false,
  className,
}: ServiceItemProps) => {
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: true });

  return (
    <article
      id={id}
      ref={ref}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-0 lg:items-center justify-center lg:mt-28 scroll-m-60 ${
        invert ? 'lg:flex-row-reverse' : ''
      } ${className}`}
    >
      <div
        style={{
          transitionProperty: 'transform, opacity, visibility',
          transitionDuration: '1500ms, 1000ms, 1000ms',
        }}
        className={`bg-containerBg-default px-containerX py-containerY ${
          invert ? 'pr-containerX lg:pl-32' : 'pl-containerX lg:pr-32'
        } lg:w-[50vw] max-w-5xl lg:min-w-[600px] text-light ${
          inView
            ? 'translate-x-0 opacity-100 visible blur-0'
            : `${
                invert ? 'translate-x-80' : '-translate-x-80'
              } opacity-0 invisible blur-[2px]`
        } ease-in-out`}
      >
        <Subtitle>{subtitle}</Subtitle>
        <h3 className='text-4xl text-white mt-5 underlined'>{title}</h3>
        {description.map((item, index) => (
          <p
            key={index}
            className={`${index === 0 ? 'mt-6 lg:mt-8' : 'mt-4 lg:mt-6'}`}
          >
            {item}
          </p>
        ))}

        <Button
          href='/kontakt'
          className={`${invert && 'ml-auto lg:ml-0'} mt-8`}
        >
          {buttonText}
        </Button>
      </div>

      <div
        style={{
          transitionProperty: 'transform, opacity, visibility',
          transitionDuration: '1500ms, 1000ms, 1000ms',
        }}
        className={`relative z-10 flex-1 aspect-[700/467] w-full sm:max-w-[400px] lg:min-w-[600px] lg:max-w-[700px] group ease-in-out overflow-hidden ${
          invert
            ? 'mr-auto lg:mr-0 lg:translate-x-24'
            : 'ml-auto lg:ml-0 lg:-translate-x-24'
        } ${
          inView
            ? 'translate-y-0 sm:-translate-y-32 lg:translate-y-0 opacity-100 visible blur-0'
            : 'translate-y-80 opacity-0 invisible blur-[2px]'
        }`}
      >
        <Image
          src={image1}
          alt={`${title} u Grand Dentalu`}
          fill
          sizes='(max-width: 768px) 400px, (max-width: 1024px) 400px, 700px'
          className='object-cover translate-y-0 group-hover:translate-y-full transition-all duration-300 ease-in-out'
        />
        <Image
          src={image2}
          alt={`${title} u Grand Dentalu`}
          fill
          sizes='(max-width: 1024px) 400px, 700px'
          className='object-cover -translate-y-full group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out'
        />
      </div>
    </article>
  );
};

export default ServiceItem;
