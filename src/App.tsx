import React, { ReactNode } from "react";
import MainContainer from "./components/main-comtainer/MainContainer";
import Navbar from "./components/molecules/navbar/Navbar";
import ClockIcon from "./components/icons/clock-icon/ClockIcon";
import Line3 from "./components/icons/line-3/Line3";
import Profile from "./components/molecules/profile/Profile";
import LocationIcon from "./components/icons/location-icon/LocationIcon";
import Vl from "./components/atoms/vl/Vl";
import PlusIcon from "./components/icons/plus-icon/PlusIcon";
import Button from "./components/atoms/button/Button";

const App = () => {
  return (
    <MainContainer>
      <div className="grid-row-10  grid grid-cols-1 gap-10   lg:grid-cols-12 ">
        <div className="col-span-full  rounded bg-white p-base">
          <Navbar />
        </div>
        <div className="col-span-9  row-span-2 rounded bg-white p-base ">
          <div className="flex items-center justify-between gap-12">
            <div className="flex items-center gap-6">
              <Line3 />
              <div>
                <p className="min-w-[201px] text-base font-medium">
                  Individual tax return 2019
                </p>
                <p className="flex gap-2">
                  <ClockIcon />
                  <span className="text-paragraph text-gray">
                    16 December 2020
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Profile
                title={"Annette Black"}
                subtitle="New York, NY"
                isActive={true}
                subTitleIcon={<LocationIcon />}
              />
              <Vl />
              <div className="flex items-center space-x-6 ">
                <div className="">
                  <p className="text-base font-medium">$1000</p>
                  <span className="text-nowrap text-paragraph">
                    Potential earning
                  </span>
                </div>
                <PlusIcon />
              </div>
              <Vl />
              <Button>Contact</Button>
            </div>
          </div>
        </div>
        <div className="col-span-4    border ">
          item4
          <button className="bg-blue-500 hover:bg-indigo-500  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            Save Changes
          </button>
        </div>
        <div className="col-span-5    border ">item5</div>
        <div className="col-span-full border ">item6</div>
        <div className="col-span-4 border ">item7</div>
        <div className="col-span-5 row-span-2  border ">item8</div>
        <div className="col-span-3  border ">item9</div>
        <div className="col-span-4  border ">item10</div>
        <div className="col-span-3  border">item11</div>
      </div>
    </MainContainer>
  );
};

export default App;
