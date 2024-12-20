import { useState } from "react";
import { Switch } from "./Switch";
import { DropdownSelect } from "./DropDown";

export const HeroManage = () => {
  const [include, setInclude] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [selectedValue, setSelectedValue] = useState("name");
  return (
    <div className="pt-[21px] flex lg:flex-row flex-col gap-y-5 justify-between items-center">
      <div className=" relative w-full md:w-[397px] flex items-center h-[100px] md:h-[71px] ">
        <div className="w-[45%] flex items-center justify-center">
          <div className="flex flex-col items-end">
            <p className="flex text-white/50 gap-x-1 text-2xl font-normal font-['Keania One']">
              <img src="/fire.svg" alt="" /> Featured
            </p>
            <DropdownSelect
              options={[
                { label: "Sort By", value: "Sort By" },
                { label: "Date", value: "date" },
                { label: "Price", value: "price" },
              ]}
              value={selectedValue}
              onChange={(value) => setSelectedValue(value)}
            />
          </div>
        </div>
        <div className="w-px h-full bg-[#17ccc6]" />
        <div className=" w-[55%] flex gap-x-[34px] justify-center items-center">
          <Switch
            label="include nsfw"
            checked={include}
            onChange={setInclude}
          />
          <Switch
            label="Show animation"
            checked={animation}
            onChange={setAnimation}
          />
        </div>
        <img
          src="/manage-bg.png"
          alt=""
          className="absolute top-0 left-0 z-[-1] w-full h-full"
        />
      </div>
      <div>
        <img src="/hero-line.svg" alt="" />
      </div>
    </div>
  );
};
