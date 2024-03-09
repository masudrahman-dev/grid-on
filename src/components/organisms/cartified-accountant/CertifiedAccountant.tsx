import React from "react";
import Button from "../../atoms/button/Button";
import CrossIcon from "../../icons/cross-icon/CrossIcon";

const CertifiedAccountant = () => {
  return (
    <div className="flex items-center justify-between rounded bg-primary p-6">
      <div className="flex items-center space-x-6">
        <Button className="rounded-full bg-white px-4 py-2 text-primary">
          CPA
        </Button>
        <p className="text-sm font-medium text-white">
          Certified Public Accountant
        </p>
      </div>
      <button className="inline-flex items-center justify-start rounded-full bg-white p-1 text-paragraph opacity-80">
        <CrossIcon className="h-4 w-4 stroke-2" />
      </button>
    </div>
  );
};

export default CertifiedAccountant;
