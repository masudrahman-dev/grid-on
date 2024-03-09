import React from "react";
import clx from "../../utils/clx";

const ProgressBar = ({ progress = 0 }: { progress: number }) => {
  return (
    <div className="relative">
      <div
        style={{ width: `${100}%` }}
        className={clx("h-1  rounded-full bg-gray")}
      ></div>
      <div
        style={{ width: `${progress}%` }}
        className={clx("absolute inset-0 h-1 rounded-full bg-secondary")}
      ></div>
    </div>
  );
};

export default ProgressBar;
