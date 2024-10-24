import Link from 'next/link';

const Button = ({
  children,
  href,
  className,
  variant = 'primary',
  externalLink,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
  externalLink?: boolean;
}) => {
  const commonProps = {
    className: ` w-fit px-8 py-4 block transition-colors duration-300 text-nowrap  ${
      variant === 'secondary'
        ? 'bg-white text-buttonTextDark border border-primary-dark hover:border-white hover:bg-primary-default hover:text-white'
        : 'text-black bg-primary-default hover:bg-primary-dark'
    } ${className}`,
    ...props,
  };

  const buttonElement = href ? (
    externalLink ? (
      <a href={href} {...commonProps} target='_blank'>
        {children}
      </a>
    ) : (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    )
  ) : (
    <button {...commonProps}>{children}</button>
  );

  return buttonElement;
};

export default Button;
