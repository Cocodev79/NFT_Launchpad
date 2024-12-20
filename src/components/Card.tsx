export const Card = ({ className }: { className?: string }) => (
  <div
    style={{ backgroundSize: "contain" }}
    className={`!w-full pb-2 h-[250px] md:h-auto pr-1 relative  bg-no-repeat ${className} `}
  >
    <div className="flex gap-x-[15px] justify-between">
      <div className="w-[35%] pl-1 pt-1">
        <img src="/card-image.png" alt="" className=" h-[100px] w-[119px]" />
      </div>
      <div className="w-[65%] flex flex-col justify-between ">
        <p className="text-[#17ccc6] text-[27px] xl:text-[31px] font-normal font-['Keania One'] leading-9">
          Cutipie Penguin
        </p>
        <p className="text-white text-[27px] xl:text-[31px] font-normal font-['Keania One'] leading-9">
          #464
        </p>
        <p>
          <div className="mt-[9px] w-[237px] opacity-75 text-white/50 text-[11px] font-light font-['Londrina Solid'] leading-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo .................
          </div>
        </p>
      </div>
    </div>
    <div className="grid px-[9px] py-[12px] grid-cols-3">
      <div>
        <p className=" text-white text-[15px] font-normal  kadwa_regular leading-[27px]">
          Snow White
        </p>
        <p className=" text-[#17ccc6] text-xs font-normal kadwa_regular leading-[19px]">
          BACKGROUND
        </p>
      </div>
      <div>
        <p className=" text-white text-[15px] font-normal  kadwa_regular leading-[27px]">
          Level 99
        </p>
        <p className=" text-[#17ccc6] text-xs font-normal kadwa_regular leading-[19px]">
          LEVEL
        </p>
      </div>
      <div>
        <p className=" text-white text-[15px] font-normal  kadwa_regular leading-[27px]">
          Sparkle Eyes
        </p>
        <p className=" text-[#17ccc6] text-xs font-normal kadwa_regular leading-[19px]">
          EYES
        </p>
      </div>
    </div>
    <div className="flex pt-4 gap-x-[15px] pl-2 !justify-between px-[9px]">
      <button className=" w-1/2  relative xl:w-[50%] transition-all duration-150 hover:opacity-70 h-[48px] flex items-center justify-center text-[#17ccc6] text-sm font-normal font-['Keania One'] leading-[9px] ">
        Mint Now
        <img
          src="/card-left-button-bg.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full"
        />
      </button>
      <button className="w-1/2 relative ml-2 xl:w-[50%] transition-all duration-150 hover:opacity-70 h-[48px] flex items-center justify-center text-[#17ccc6] text-sm font-normal font-['Keania One'] leading-[9px] ">
        See Details
        <img
          src="/card-right-button-bg.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full"
        />
      </button>
    </div>
    <img
      src="/card-bg.png"
      alt=""
      className="absolute w-full h-full top-0 left-0 z-[-1]"
    />
  </div>
);
