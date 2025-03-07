import { Link } from 'next-view-transitions';

const Button = ({
  children,
  href,
  className,
  variant = 'primary',
  externalLink,
  type = 'button',
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accented';
  externalLink?: boolean;
  type?: 'button' | 'submit';
}) => {
  const commonProps = {
    className: `w-fit lg:px-8 lg:py-4 sm:px-6 sm:py-3 px-5 py-4 block transition-colors duration-300 text-nowrap font-bold  ${
      variant === 'secondary'
        ? 'bg-white text-buttonTextDark border border-primary-dark hover:border-white hover:bg-primary-default hover:text-white'
        : variant === 'accented'
        ? 'text-white bg-accent-default hover:bg-accent-dark'
        : 'text-light bg-accent-default hover:bg-accent-dark'
    } ${className}`,
    ...props,
  };

  const buttonElement = href ? (
    externalLink ? (
      <a href={href} {...commonProps} target='_blank'>
        {children}
      </a>
    ) : (
      <Link href={href} {...commonProps} scroll={true}>
        {children}
      </Link>
    )
  ) : (
    <button type={type} {...commonProps}>
      {children}
    </button>
  );

  return buttonElement;
};

export default Button;
