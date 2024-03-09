import React from "react";

import ProgressBar from "../../atoms/progress-bar/ProgressBar";
import clx from "../../utils/clx";

const ProjectsDone = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-subtitle text-gray">Projects done</p>
        <p>
          <span>4</span>
          <span className="text-sm">/</span>
          <span className="text-sm text-gray">8</span>
        </p>
        {/* <ProgressBar progress={40} /> */}
        <div className="relative z-50">
          <div
            style={{ width: `${100}%` }}
            className={clx("h-1  rounded-full bg-gray")}
          ></div>
          <div
            style={{ width: `${23}%` }}
            className={clx("absolute inset-0 h-1 rounded-full bg-secondary")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDone;
