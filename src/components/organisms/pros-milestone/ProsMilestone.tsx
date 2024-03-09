import React from "react";
import PointIcon from "../../icons/point-icon/PointIcon";
import ProjectsDone from "../../molecules/projects-done/ProjectsDone";
import ProsMilestoneChart from "../../molecules/pros-milestone-chart/ProsMilestoneChart";
import useMeasure from "../../../hooks/useMeasure/useMeasure";

const ProsMilestone = () => {
  const { ref, divWidth } = useMeasure();
  console.log("divWidth :>> ", divWidth);
  return (
    <div ref={ref} className="w-full">
      <div className="space-y-8 p-base ">
        <div className="flex items-center justify-between">
          <h1 className="text-title">Pros milestines</h1>
          <PointIcon />
        </div>

        <ProjectsDone />
      </div>
      <div className="pt-[135px]">
        <ProsMilestoneChart width={divWidth} />
      </div>
    </div>
  );
};

export default ProsMilestone;
