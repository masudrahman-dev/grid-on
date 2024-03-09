import React, {
  ChangeEvent,
  DragEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import MainContainer from "./components/main-comtainer/MainContainer";

import TaxReturn from "./components/organisms/tax-return/TaxReturn";
import Navbar from "./components/organisms/navbar/Navbar";
import ProsMilestone from "./components/organisms/pros-milestone/ProsMilestone";

import CookiesCard from "./components/organisms/cookies-card/CookiesCard";
import TaxReturn2 from "./components/organisms/tax-return-2/TaxReturn2";
import TaxReturn3 from "./components/organisms/tax-return-3/TaxReturn3";
import CertifiedAccountant from "./components/organisms/cartified-accountant/CertifiedAccountant";

import Transactions from "./components/organisms/transactions/Transactions";

import watchImg from "../src/assets/watch.png";

import Review from "./components/organisms/reviw/Review";
import PlusOutlineIcon from "./components/icons/plus-outline-icon/PlusOutlineIcon";
import ImageUpload from "./components/organisms/image-upload/ImageUpload";
import clx from "./components/utils/clx";

const App = () => {
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const boxStyle =
    "rounded   bg-white lg:p-base p-2 m-2 lg:m-0 lg:col-span-full";
  return (
    <MainContainer>
      <div className="lg:grid-row-12  grid grid-cols-1 gap-10   lg:grid-cols-12 ">
        <div className={clx("", boxStyle)}>
          <Navbar />
        </div>
        {/* <div className="rounded    bg-white p-base lg:col-span-9 ">
          <TaxReturn />
        </div>
        <div className="rounded bg-white     lg:col-span-3 lg:row-span-3 ">
          <ProsMilestone />
        </div>
        <div className="rounded  bg-white   p-base lg:col-span-4 lg:row-span-2  ">
          <CookiesCard />
        </div>

        <div className="rounded   bg-white   p-base lg:col-span-5 lg:row-span-2  ">
          <TaxReturn2 />
        </div>
        <div className="group rounded  bg-white p-base lg:col-span-full ">
          <TaxReturn3 />
        </div>
        <div className="bg-white    lg:col-span-4 ">
          <CertifiedAccountant />
        </div>
        <div className="rounded bg-white  p-base lg:col-span-5 lg:row-span-4 ">
          <Transactions />
        </div>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="rounded bg-white  p-2 lg:col-span-3 lg:row-span-2 "
        >
          <ImageUpload handleChange={handleChange} />
        </div>
        <div className="rounded bg-white p-base  lg:col-span-4 lg:row-span-3  ">
          <Review />
        </div>
        <div className="rounded bg-white  lg:col-span-3 lg:row-span-2  ">
          <img
            className="h-[200px] w-[290px] rounded"
            src={imageSrc ? imageSrc?.toString() : watchImg}
            alt="Uploaded"
          />
        </div> */}
      </div>
    </MainContainer>
  );
};

export default App;
