import React from "react";
import CrossIcon from "../../icons/cross-icon/CrossIcon";
import Button from "../../atoms/button/Button";

const CookiesCard = () => {
  return (
    <div className="  flex h-full flex-col ">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <p className="text-title font-semibold">We use cookies!</p>
          <button className="inline-flex items-center justify-start rounded-full bg-blue-light p-1 text-paragraph">
            <CrossIcon className="h-4 w-4 stroke-2" />
          </button>
        </div>
        <p className="text-paragraph leading-6 text-gray">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="relative flex-1">
        <div className="absolute bottom-0 left-0 right-0  space-y-2  ">
          <Button className="w-full ">Configure cookies</Button>
          <Button className="w-full bg-primary text-white hover:bg-blue-light hover:text-primary">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookiesCard;
