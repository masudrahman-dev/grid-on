import React, { ReactNode, useEffect, useRef, useState } from "react";
import MainContainer from "./components/main-comtainer/MainContainer";

import TaxReturn from "./components/organisms/tax-return/TaxReturn";
import Navbar from "./components/organisms/navbar/Navbar";
import ProsMilestone from "./components/organisms/pros-milestone/ProsMilestone";
import clx from "./components/utils/clx";
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
        <div className="col-span-3 row-span-3     rounded bg-white ">
          <ProsMilestone />
        </div>
        <div className="col-span-4    rounded bg-white p-base  ">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <p>We use cookies!</p>
              <button className="inline-flex items-center justify-start rounded-full bg-blue-light p-1 text-paragraph">
                <CrossIcon className="h-4 w-4 stroke-2" />
              </button>
            </div>
            <p className="text-paragraph leading-6 text-gray">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="space-y-2">
              <Button className="w-full bg-blue-light text-primary  hover:bg-primary hover:text-white">
                Configure cookies
              </Button>
              <Button className="w-full hover:bg-blue-light hover:text-primary">
                Confirm
              </Button>
            </div>
          </div>
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
