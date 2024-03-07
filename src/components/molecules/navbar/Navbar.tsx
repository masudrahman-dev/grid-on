import React from "react";
import Logo from "../../icons/logo-icon/Logo";
import Vl from "../../atoms/vl/Vl";
import BellAlertIcon from "../../icons/bell-alert-icon/BellAlertIcon";
import Avatar from "../../atoms/avatar/Avatar";
import Menu from "../menu/Menu";

const Navbar = () => {
  return (
    <nav className="flex justify-between ">
      <div className="flex  items-center">
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="font-semibold leading-4">
            Website <span className="block">Name</span>
          </h1>
        </div>
        <Vl />
        <ul className="flex  items-center space-x-12">
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
      </div>
      <div className="flex items-center">
        <BellAlertIcon />
        <Vl />
        <div className="flex items-center gap-4">
          <Avatar />
          <h2 className="text-paragraph font-medium">Annette Black</h2>
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
