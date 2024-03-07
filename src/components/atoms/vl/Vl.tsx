import React from "react";
import clx from "../../utils/clx";

const Vl = ({ className }: { className?: string }) => {
  return (
    <div
      className={clx("mx-8 h-8 w-[1px] rounded-full bg-gray", className)}
    ></div>
  );
};

export default Vl;
