import React from "react";

export const IconButton = ({
  count,
  icon,
  link,
}: {
  count: string;
  link?: string;
  icon: React.ReactNode;
}) => (
  <a
    href={link}
    className=" flex transition-all duration-150 hover:opacity-70  items-center justify-center w-[65px] h-[72px] relative bg-[url('/icon-button-bg.png')] bg-no-repeat bg-contain  "
  >
    <p className=" text-[#17ccc6] text-[11px] font-normal font-['Keania One'] absolute -top-3 left-0 ">
      {count}
    </p>
    <div className=" w-full h-full flex items-center justify-center ">
      {icon}
    </div>
  </a>
);
