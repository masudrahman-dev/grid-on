import React, { ReactNode, useEffect, useRef, useState } from "react";
import MainContainer from "./components/main-comtainer/MainContainer";

import TaxReturn from "./components/organisms/tax-return/TaxReturn";
import Navbar from "./components/organisms/navbar/Navbar";
import ProsMilestone from "./components/organisms/pros-milestone/ProsMilestone";

import CookiesCard from "./components/organisms/cookies-card/CookiesCard";
import TaxReturn2 from "./components/organisms/tax-return-2/TaxReturn2";
import TaxReturn3 from "./components/organisms/tax-return-3/TaxReturn3";
import CrossIcon from "./components/icons/cross-icon/CrossIcon";
import Button from "./components/atoms/button/Button";
import CertifiedAccountant from "./components/organisms/cartified-accountant/CertifiedAccountant";
import ThreeDotIcon from "./components/icons/three-dot-icon/ThreeDotIcon";
import ClockIcon from "./components/icons/clock-icon/ClockIcon";
import GrowIcon from "./components/icons/grow-icon/GrowIcon";
import Line from "./components/atoms/line/Line";
import Hr from "./components/atoms/hr/Hr";
import Transactions from "./components/organisms/transactions/Transactions";
import PlusIcon from "./components/icons/plus-icon/PlusIcon";

import watchImg from "../src/assets/watch.png";
import Profile from "./components/molecules/profile/Profile";
import LocationIcon from "./components/icons/location-icon/LocationIcon";
import StarIcon from "./components/icons/star-icon/StarIcon";
import Review from "./components/organisms/reviw/Review";

const App = () => {
  return (
    <MainContainer>
      <div className="grid-row-12  grid grid-cols-1 gap-10   lg:grid-cols-12 ">
        <div className="col-span-full  rounded bg-white p-base">
          <Navbar />
        </div>
        <div className="col-span-9    rounded bg-white p-base ">
          <TaxReturn />
        </div>
        <div className="col-span-3 row-span-3     rounded bg-white ">
          <ProsMilestone />
        </div>
        <div className="col-span-4  row-span-2   rounded bg-white p-base  ">
          <CookiesCard />
        </div>

        <div className="col-span-5   row-span-2   rounded bg-white p-base  ">
          <TaxReturn2 />
        </div>
        <div className="group col-span-full  rounded bg-white p-base ">
          <TaxReturn3 />
        </div>
        <div className="col-span-4    bg-white ">
          <CertifiedAccountant />
        </div>
        <div className="col-span-5 row-span-4  rounded bg-white p-base ">
          <Transactions />
        </div>
        <div className="col-span-3 row-span-2  rounded bg-white p-2 ">
          <div className=" flex h-full w-full items-center justify-center rounded border border-dashed border-gray p-11 ">
            <div>
              <div className="pb-4">
                <p className="text-sm font-medium">Drop document here</p>
                <p className="text-paragraph text-gray">or upload it manualy</p>
              </div>
              <Button className="rounded-full  bg-primary px-4 py-2 text-white">
                <span className=" text-paragraph font-medium">
                  Upload manualy
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 fill-white stroke-2 pl-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-4 row-span-3 rounded  bg-white p-base  ">
          <Review />
        </div>
        <div className="col-span-3 row-span-2  rounded bg-white  ">
          <img className="w-full" src={watchImg} alt="watch" />
        </div>
      </div>
    </MainContainer>
  );
};

export default App;
