import React from "react";

const Line = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-6">
        <p className="h-12 w-12 rounded-full bg-blue-light p-3">BM </p>
        <div>
          <p className="text-title">Individual tax return 2019</p>
          <p className="text-paragraph text-gray">01 May 2020</p>
        </div>
      </div>
      <p className="text-paragraph">
        <span className="font-medium">$240</span>
        <span className="text-paragraph text-gray">.50</span>
      </p>
    </div>
  );
};

export default Line;
