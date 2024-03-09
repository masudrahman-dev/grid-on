import React from "react";
import ClockIcon from "../../icons/clock-icon/ClockIcon";
import ThreeDotIcon from "../../icons/three-dot-icon/ThreeDotIcon";
import { v4 } from "uuid";
import Button from "../../atoms/button/Button";
const items = [
  "Professional",
  "New York, NY",
  "Employed",
  "Nonresident alien",
  "Single",
];
const TaxReturn2 = () => {
  return (
    <div className="space-y-base">
      <div className="flex items-center justify-between">
        <div>
          <p className="min-w-[201px] text-base font-semibold">
            Individual tax return 2019
          </p>
          <p className="flex gap-2 text-gray">
            <ClockIcon />
            <span className="text-paragraph text-gray">16 December 2020</span>
          </p>
        </div>
        <ThreeDotIcon />
      </div>
      <div className="h-[1px] w-full rounded-full bg-gray " />

      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          return (
            <Button key={v4()} className="rounded-full">
              {item}
            </Button>
          );
        })}
      </div>
      <div className="h-[1px] w-full rounded-full bg-gray" />

      <div className="flex items-center justify-between space-x-6 ">
        <div className="">
          <p className="text-base font-medium">$1000</p>
          <span className="text-nowrap text-paragraph text-gray">
            Potential earning
          </span>
        </div>
        <Button>Confirm</Button>
      </div>
    </div>
  );
};

export default TaxReturn2;
