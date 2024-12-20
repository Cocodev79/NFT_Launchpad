import { Search } from "../icons";
import { SecondButton } from "./SecondButton";

export const Input = ({
  placeholder,
  className,
}: {
  placeholder?: string;
  className?: string;
}) => (
  <div
    className={` h-[74px] w-[95%] max-[757px]:w-[95%]  md:w-[492px] relative  ${className} `}
  >
    <input
      type="text"
      placeholder={placeholder}
      className="w-full inline-block pl-[25px]  h-full bg-transparent outline-none border-none  text-start text-white text-base font-['Londrina Solid'] leading-[14px] tracking-wide"
    />
    <SecondButton className="absolute right-3 md:right-1.5 top-[50%] md:top-1/2  -translate-y-1/2 flex items-center justify-center">
      <Search className=" h-5 md:w-[27px] lg:ml-1 w-5 md:h-[27px]" />
    </SecondButton>
    <img
      src="/input-bg.png"
      alt=""
      className="absolute top-0 w-full h-full z-[-1]"
    />
  </div>
);
