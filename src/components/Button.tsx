export const Button = ({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="h-[54px] px-[32px] flex items-center transition-all duration-150 hover:opacity-70 justify-center text-[#17ccc6] bg-[url('/button-bg.png')] bg-no-repeat bg-contain  "
  >
    {children}
  </button>
);
