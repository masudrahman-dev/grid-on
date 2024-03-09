import React from "react";
import clx from "../../utils/clx";

const Space = ({ className }: { className: string }) => {
  return <div className={clx("", className)}></div>;
};

export default Space;
