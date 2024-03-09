import React, { ChangeEvent } from "react";
import PlusOutlineIcon from "../../icons/plus-outline-icon/PlusOutlineIcon";

const ImageUpload = ({
  handleChange,
}: {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <div className=" flex h-full w-full flex-col items-center justify-center rounded border border-dashed border-gray p-11 ">
        <div className="pb-4">
          <p className="text-sm font-medium">Drop document here</p>
          <p className="text-paragraph text-gray">or upload it manualy</p>
        </div>

        <label
          id="upload"
          className="flex rounded-full  bg-primary px-4 py-2 text-white"
        >
          <span className=" text-paragraph font-medium">Upload manualy</span>
          <input
            type="file"
            className=" hidden "
            id="upload"
            accept="*"
            onChange={handleChange}
          />

          <PlusOutlineIcon />
        </label>
      </div>
    </>
  );
};

export default ImageUpload;
