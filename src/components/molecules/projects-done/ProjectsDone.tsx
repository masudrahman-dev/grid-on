import React from "react";

import ProgressBar from "../../atoms/progress-bar/ProgressBar";


const ProjectsDone = () => {
  return (
    <>
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-subtitle text-gray">Projects done</p>
            <p>
              <span>4</span>
              <span className="text-sm">/</span>
              <span className="text-sm text-gray">8</span>
            </p>
          </div>
          <ProgressBar progress={33} />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-subtitle text-gray">Rating</p>
            <p>
              <span>5</span>
              <span className="text-sm">.</span>
              <span className="text-sm text-gray">0</span>
            </p>
          </div>
          <ProgressBar progress={100} />
        </div>
      </div>
    </>
  );
};

export default ProjectsDone;
