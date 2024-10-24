import Link from 'next/link';

const Button = ({
  children,
  href,
  className,
  variant = 'primary',
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}) => {
  const commonProps = {
    className: ` w-fit px-8 py-4 block transition-colors duration-300  ${
      variant === 'secondary'
        ? 'bg-white text-buttonTextDark border border-primary-dark hover:border-white hover:bg-primary-default hover:text-white'
        : 'text-white bg-primary-default hover:bg-primary-dark'
    } ${className}`,
    ...props,
  };

  const buttonElement = href ? (
    <Link href={href} {...commonProps}>
      {children}
    </Link>
  ) : (
    <button {...commonProps}>{children}</button>
  );

  return buttonElement;
};

export default Button;
