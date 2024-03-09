import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";

import Line3 from "../../icons/line-3/Line3";
const NavbarMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="  items-center justify-center rounded-full bg-white  outline-none transition-colors delay-100 hover:bg-primary hover:fill-white  hover:text-white focus:outline lg:hidden inline-flex  lg:h-[35px] lg:w-[35px] ">
          <Line3 />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] space-y-7 rounded-md bg-white p-[5px] py-4 text-title shadow-lg  will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
          align="end"
        >
          <DropdownMenu.Item className=" flex items-center px-[5px] pl-[25px]  leading-none  outline-none data-[disabled]:pointer-events-none ">
            <a href="#">Explore</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" flex items-center px-[5px] pl-[25px]  leading-none  outline-none data-[disabled]:pointer-events-none ">
            <a href="#">My Clients</a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className=" flex items-center px-[5px] pl-[25px]  leading-none  outline-none data-[disabled]:pointer-events-none ">
            <a href="#">Blog</a>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default NavbarMenu;
