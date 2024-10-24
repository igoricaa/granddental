import Link from "next/link";

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
    className: `text-white w-fit px-8 py-4 block transition-all duration-300 bg-primary-default hover:bg-primary-dark ${className}`,
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
