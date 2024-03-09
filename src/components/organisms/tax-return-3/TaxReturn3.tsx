import React from "react";
import Line3 from "../../icons/line-3/Line3";
import ClockIcon from "../../icons/clock-icon/ClockIcon";
import Profile from "../../molecules/profile/Profile";
import LocationIcon from "../../icons/location-icon/LocationIcon";
import Vl from "../../atoms/vl/Vl";
import PlusIcon from "../../icons/plus-icon/PlusIcon";
import Button from "../../atoms/button/Button";
import ArrowLeft from "../../icons/arrow-left/ArrowLeft";

const TaxReturn3 = () => {
  return (
    <div className=" flex flex-col items-center justify-between  lg:gap-12 gap-6 lg:flex-row">
      <div className="flex items-center justify-between gap-6">
        <ArrowLeft className="transition-transform duration-100 group-hover:-translate-x-2 " />
        <div>
          <p className="min-w-[201px] text-base font-medium">
            Individual tax return 2019
          </p>
          <p className="flex gap-2 text-gray">
            <ClockIcon />
            <span className="text-paragraph text-gray">16 December 2020</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
        <Vl className="hidden lg:block" />
        <div className="flex items-center justify-between space-x-6 ">
          <div className="">
            <p className="text-base font-medium">$1000</p>
            <span className="text-nowrap text-paragraph text-gray">
              Potential earning
            </span>
          </div>
          <PlusIcon />
        </div>
        <Vl className="hidden lg:block" />
        <Button>Contact</Button>
      </div>
    </div>
  );
};

export default TaxReturn3;
