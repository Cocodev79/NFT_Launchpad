import { Card } from "./Card";
import { Pagination } from "./Pagination";

export const Tokens = () => (
  <div>
    <div className=" px-3 md:px-[69px]">
      <div className="grid pt-[39px] gap-x-[23px] gap-y-4  xl:gap-y-[29px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  ">
        {new Array(12).fill(0).map((_, index) => (
          <Card key={index} className=" w-full xl:w-auto" />
        ))}
      </div>
    </div>
    <div className=" pt-[30px] pb-[50px]  md:pt-[50px] md:pb-[50px] flex justify-center">
      <Pagination dataCount={50} perPage={10} />
    </div>
  </div>
);
