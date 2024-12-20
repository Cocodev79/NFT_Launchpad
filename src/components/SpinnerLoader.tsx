export const SpinnerLoader = () => {
  return (
    <div className="flex items-center justify-center fixed top-0 w-full left-0  h-screen z-10 bg-[#020001]">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-t-cyan-500 border-r-cyan-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-[4px] border-4 border-t-cyan-300 border-r-cyan-300 border-b-transparent border-l-transparent rounded-full animate-spin reverse"></div>
        <div className="absolute inset-[12px] bg-cyan-500 rounded-full"></div>
      </div>
    </div>
  );
};
