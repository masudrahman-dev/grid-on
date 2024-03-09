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

const App = () => {
  return (
    <MainContainer>
      <div className="grid-row-11  grid grid-cols-1 gap-10   lg:grid-cols-12 ">
        <div className="col-span-full  rounded bg-white p-base">
          <Navbar />
        </div>
        <div className="col-span-9   row-span-1 rounded bg-white p-base ">
          <TaxReturn />
        </div>
        <div className="col-span-3 row-span-3      rounded bg-white ">
          <ProsMilestone />
        </div>
        <div className="col-span-4  row-span-2   rounded bg-white p-base  ">
          <CookiesCard />
        </div>

        <div className="col-span-5   row-span-2   rounded bg-white p-base  ">
          <TaxReturn2 />
        </div>
        <div className="group col-span-full row-span-1 rounded bg-white p-base ">
          <TaxReturn3 />
        </div>
        <div className="col-span-4  row-span-1  bg-white ">
          <CertifiedAccountant />
        </div>
        <div className="col-span-5 row-span-2  rounded bg-white p-base ">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <p className="min-w-[201px] text-base font-semibold">
                Latest transactions
              </p>
              <div className="flex items-center gap-2">
                <p className="h-5 w-5 rounded-full bg-blue-light text-paragraph">
                  $
                </p>
                <p className="text-secondary">+8,6%</p>
                <GrowIcon />
              </div>
            </div>
            <Hr />
            <Line />
            <Hr />
            <Line />
            <Hr />
            <Line />
          </div>
        </div>
        <div className="col-span-3  border ">item9</div>
        <div className="col-span-4  border ">item10</div>
        <div className="col-span-3  border">item11</div>
      </div>
    </MainContainer>
  );
};

export default App;
