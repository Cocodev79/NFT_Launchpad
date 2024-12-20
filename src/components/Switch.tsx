export const Switch = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) => {
  return (
    <div>
      <div
        onClick={() => onChange(!checked)}
        className="  cursor-pointer flex items-center justify-evenly w-[60px] h-7 bg-[#232222] border border-[#17ccc6] relative"
      >
        <div
          className={`absolute top-0 !transition-all !duration-150 w-[26px] h-[26px]  border border-white/10 ${
            checked ? "left-[32px] bg-[#17ccc6]" : "left-0 bg-[#2b3337]"
          } `}
        />
        <p className="Off w-4 h-[17px] text-[#17ccc6] text-[11px] font-normal font-['Keania One']">
          On
        </p>
        <p className="Off w-4 h-[17px] text-[#17ccc6] text-[11px] font-normal font-['Keania One']">
          off
        </p>
      </div>
      <p className="mt-2 text-white/50 text-[11px] font-light font-['Londrina Solid']">
        {label}
      </p>
    </div>
  );
};
