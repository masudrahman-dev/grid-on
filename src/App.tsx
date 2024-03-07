import React from "react";
import MainContainer from "./components/main-comtainer/MainContainer";
import Logo from "./components/icons/logo-icon/Logo";
import CrossIcon from "./components/icons/cross-icon/CrossIcon";

const App = () => {
  return (
    <MainContainer>
      <div className="grid-row-10  grid grid-cols-1 gap-10  border lg:grid-cols-12 ">
        <div className="col-span-full border  bg-dark">
          {/* <Logo /> */}
          <CrossIcon />
        </div>
        <div className="col-span-9    border ">item2</div>
        <div className="col-span-3  row-span-2  border ">item3</div>
        <div className="col-span-4    border ">item4</div>
        <div className="col-span-5    border ">item5</div>
        <div className="col-span-full border ">item6</div>
        <div className="col-span-4 border ">item7</div>
        <div className="col-span-5 row-span-2  border ">item8</div>
        <div className="col-span-3  border ">item9</div>
        <div className="col-span-4  border ">item10</div>
        <div className="col-span-3  border">item11</div>
      </div>
    </MainContainer>
  );
};

export default App;
