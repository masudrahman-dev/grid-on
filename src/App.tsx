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

const App = () => {
  return (
    <MainContainer>
      <div className="grid-row-10  grid grid-cols-1 gap-10   lg:grid-cols-12 ">
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
          <div className="flex items-center justify-between rounded bg-primary p-6">
            <div className="space-x-6 flex items-center">
              <Button className="rounded-full bg-white px-4 py-2 text-primary">
                CPA
              </Button>
              <p className="text-sm font-medium text-white">
                Certified Public Accountant
              </p>
            </div>
            <button className="inline-flex items-center justify-start rounded-full bg-white p-1 text-paragraph opacity-80">
              <CrossIcon className="h-4 w-4 stroke-2" />
            </button>
          </div>
        </div>
        <div className="col-span-5 row-span-2  border ">item8</div>
        <div className="col-span-3  border ">item9</div>
        <div className="col-span-4  border ">item10</div>
        <div className="col-span-3  border">item11</div>
      </div>
    </MainContainer>
  );
};

export default App;
