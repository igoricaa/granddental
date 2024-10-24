const Subtitle = ({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <span
      className={`uppercase text-sm  px-2 py-2 text-white ${
        variant === 'secondary' ? 'bg-accent-default' : 'bg-primary-default'
      }`}
    >
      {children}
    </span>
  );
};

export default Subtitle;
