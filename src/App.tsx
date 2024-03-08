import React from "react";
import MainContainer from "./components/main-comtainer/MainContainer";
import Navbar from "./components/molecules/navbar/Navbar";

const App = () => {
  return (
    <MainContainer>
      <div className="grid-row-10  grid grid-cols-1 gap-10   lg:grid-cols-12 ">
        <div className="col-span-full  rounded bg-white p-base">
          <Navbar />
        </div>
        <div className="col-span-3  row-span-2  border ">




          
        </div>
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
