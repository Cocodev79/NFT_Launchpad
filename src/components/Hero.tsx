import { Input } from "./Input";
import { HeroManage } from "./HeroManage";

export const Hero = () => {
  return (
    <div className="">
      <div className=" px-3 xl:px-[29px] flex justify-between pt-2">
        <div className="w-[55px] relative   h-[55px]">
          <div className="w-full h-px bg-[#17CCC6] absolute right-1/2 translate-x-1/2 -translate-y-1/2  top-1/2"></div>
          <div className="w-px h-full bg-[#17CCC6] absolute right-1/2 translate-x-1/2 -translate-y-1/2  top-1/2"></div>
        </div>
        <div className="w-[55px] relative   h-[55px]">
          <div className="w-full h-px bg-[#17CCC6] absolute right-1/2 translate-x-1/2 -translate-y-1/2  top-1/2"></div>
          <div className="w-px h-full bg-[#17CCC6] absolute right-1/2 translate-x-1/2 -translate-y-1/2  top-1/2"></div>
        </div>
      </div>
      <div className="w-full flex justify-center relative">
        <h1 className="PenguinToken w-full text-wrap min-[400px]:text-[100px] md:w-[635px] min-[730px]:w-[435px] text-center text-[#17ccc6] text-[60px] md:text-[124px] font-normal font-['Keania One'] leading-[196px]">
          PENGUIN TOKEN
        </h1>
        <Input
          placeholder="search token by name...."
          className=" !absolute top-1/2 -translate-y-1/2"
        />
      </div>
      <div className="px-3 lg:px-[69px]">
        <HeroManage />
      </div>
    </div>
  );
};
