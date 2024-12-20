import { IconButton } from "./IconButton";
import { RiTwitterXFill } from "react-icons/ri";
import { Button } from "./Button";
import { UserFile, Users } from "../icons";

export const Header = () => (
  <header className="pt-[38px] flex xl:flex-row gap-y-4 flex-col justify-between items-center  xl:px-[69px] ">
    <div>
      <div className="flex pt-[21px] gap-x-[17px]">
        <IconButton
          count={"01"}
          icon={<UserFile className=" h-[23px] w-[23px] mb-2 text-[#17CCC6]" />}
        />
        <IconButton
          count={"02"}
          icon={<Users className=" h-[23px] w-[23px] mb-2 text-[#17CCC6]" />}
        />
        <IconButton
          count={"03"}
          icon={
            <RiTwitterXFill className=" h-[23px] w-[23px] mb-2 text-[#17CCC6]" />
          }
        />
      </div>
      <div>
        <div className="pt-[14px]">
          <a className="text-[#17ccc6] cursor-pointer text-[15px] font-normal font-['Keania One']">
            How it works{" "}
          </a>
          <a className="text-[#164859] cursor-pointer text-[15px] font-normal font-['Keania One']">
            |
          </a>
          <a className="text-[#17ccc6] cursor-pointer text-[15px] font-normal font-['Keania One']">
            {" "}
            Advanced{" "}
          </a>
          <a className="text-[#164859] cursor-pointer text-[15px] font-normal font-['Keania One']">
            |{" "}
          </a>
          <a className="text-[#17ccc6] cursor-pointer text-[15px] font-normal font-['Keania One']">
            Support
          </a>
        </div>
      </div>
    </div>
    <Button>Connect Wallet</Button>
  </header>
);
