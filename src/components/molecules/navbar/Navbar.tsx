import React from "react";
import Logo from "../../icons/logo-icon/Logo";
import Vl from "../../atoms/vl/Vl";

import Profile from "../profile/Profile";
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
      <Profile title={"Annette Black"} subtitle="New York, NY" />

      <Menu />
    </nav>
  );
};

export default Navbar;
