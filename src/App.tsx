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
  return (
    <MainContainer>
      <div className="grid-row-12  grid grid-cols-1 gap-10   lg:grid-cols-12 ">
        <div className="col-span-full  rounded bg-white p-base">
          <Navbar />
        </div>
        <div className="col-span-9    rounded bg-white p-base ">
          <TaxReturn />
        </div>
        <div className="col-span-3 row-span-3     rounded bg-white ">
          <ProsMilestone />
        </div>
        <div className="col-span-4  row-span-2   rounded bg-white p-base  ">
          <CookiesCard />
        </div>

        <div className="col-span-5   row-span-2   rounded bg-white p-base  ">
          <TaxReturn2 />
        </div>
        <div className="group col-span-full  rounded bg-white p-base ">
          <TaxReturn3 />
        </div>
        <div className="col-span-4    bg-white ">
          <CertifiedAccountant />
        </div>
        <div className="col-span-5 row-span-4  rounded bg-white p-base ">
          <Transactions />
        </div>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="col-span-3 row-span-2  rounded bg-white p-2 "
        >
          <ImageUpload handleChange={handleChange} />
        </div>
        <div className="col-span-4 row-span-3 rounded  bg-white p-base  ">
          <Review />
        </div>
        <div className="col-span-3 row-span-2  rounded bg-white  ">
          <img
            className="h-[200px] w-[290px] rounded"
            src={imageSrc ? imageSrc?.toString() : watchImg}
            alt="Uploaded"
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default App;
