import React from "react";
import Line3 from "../../icons/line-3/Line3";
import ClockIcon from "../../icons/clock-icon/ClockIcon";
import Profile from "../../molecules/profile/Profile";
import LocationIcon from "../../icons/location-icon/LocationIcon";
import Vl from "../../atoms/vl/Vl";
import PlusIcon from "../../icons/plus-icon/PlusIcon";
import Button from "../../atoms/button/Button";


const TaxReturn = () => {
  return (
    <div className="flex flex-col lg:flex-row  items-center justify-between gap-4 lg:gap-12">
      <div className="flex items-center lg:flex-row lg:gap-6">
        <Line3 />
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
      <div className="flex gap-4 lg:flex-row lg:gap-0 flex-col items-center">
        <Profile
          title={"Annette Black"}
          subtitle="New York, NY"
          isActive={true}
          subTitleIcon={<LocationIcon />}
        />
        <Vl className="hidden lg:block" />
        <div className="flex items-center space-x-6 ">
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

export default TaxReturn;
