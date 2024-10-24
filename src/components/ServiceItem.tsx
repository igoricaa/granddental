import Image, { StaticImageData } from 'next/image';
import Button from './UI/Button';
import Subtitle from './UI/Subtitle';

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
}: ServiceItemProps) => {
  return (
    <article
      className={`flex items-center mt-28 ${invert ? 'flex-row-reverse' : ''}`}
    >
      <div className='bg-primary-default px-16 py-12 w-[50vw] max-w-4xl min-w-[600px] text-textDark'>
        <Subtitle variant='secondary'>{subtitle}</Subtitle>
        <h3 className='text-4xl text-white mt-6'>{title}</h3>
        <p className='mt-8'>{description1}</p>
        {description2 && <p className='mt-6'>{description2}</p>}
        {description3 && <p className='mt-6'>{description3}</p>}

        <Button href='/kontakt' variant='secondary' className='mt-8'>
          {buttonText}
        </Button>
      </div>

      <div className='relative flex-1 aspect-[700/467] min-w-[600px] group'>
        <Image
          src={image1}
          alt={`${title} u Grand Dentalu`}
          fill
          className='object-cover group-hover:opacity-0 group-hover:invisible transition-all duration-500 ease-in-out'
        />
        <Image
          src={image2}
          alt={`${title} u Grand Dentalu`}
          fill
          className='object-cover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out'
        />
      </div>
    </article>
  );
};

export default ServiceItem;
