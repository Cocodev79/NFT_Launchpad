export const SecondButton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <button
    className={` w-[50px] md:w-[64px] transition-all duration-150 hover:opacity-70 h-[50px] md:h-[64px] bg-[url('/second-button.png')] bg-no-repeat bg-contain ${className} `}
  >
    {children}
  </button>
);
