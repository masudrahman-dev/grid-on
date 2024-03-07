import React, { ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto h-[1460px] max-w-[1440px] border pb-20 lg:px-20 lg:pt-20">
      {children}
    </div>
  );
};

export default MainContainer;
