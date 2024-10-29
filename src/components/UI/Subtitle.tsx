const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className={`uppercase text-sm  px-2 py-2 text-white bg-accent-default`}
    >
      {children}
    </span>
  );
};

export default Subtitle;
