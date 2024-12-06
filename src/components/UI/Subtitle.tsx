const Subtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`uppercase text-sm px-2 py-2 text-black bg-primary-default ${className}`}
    >
      {children}
    </span>
  );
};

export default Subtitle;
