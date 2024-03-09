import React, { useState } from "react";
import Logo from "../../icons/logo-icon/Logo";
import Vl from "../../atoms/vl/Vl";

import BellAlertIcon from "../../icons/bell-alert-icon/BellAlertIcon";
import Profile from "../../molecules/profile/Profile";
import Menu from "../../molecules/menu/Menu";
import Line3 from "../../icons/line-3/Line3";
import clx from "../../utils/clx";
import NavbarMenu from "../../molecules/navbar-menu/NavbarMenu";

const Navbar = () => {
  const menuItems = (
    <ul className={clx(" hidden items-center  space-x-12 lg:flex")}>
      <li className="text-paragraph font-medium text-gray hover:text-primary">
        <a href="#">Explore</a>
      </li>
      <li className="text-paragraph font-medium text-gray hover:text-primary">
        <a href="#">My Clients</a>
      </li>
      <li className="text-paragraph font-medium text-gray hover:text-primary">
        <a href="#">Blog</a>
      </li>
    </ul>
  );

  return (
    <nav className="flex items-center justify-between ">
      <NavbarMenu />
      <div className="flex  items-center">
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="font-semibold leading-4">
            Website <span className="block">Name</span>
          </h1>
        </div>
        <Vl className="hidden lg:block" />
        {menuItems}
      </div>
      <div className="flex items-center gap-6 ">
        <div className="hidden items-center gap-4 lg:flex">
          <BellAlertIcon />
          <Vl />
          <Profile title={"Annette Black"} />
        </div>

        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
