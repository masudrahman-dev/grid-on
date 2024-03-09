import React from "react";
import StarIcon from "../../icons/star-icon/StarIcon";
import Profile from "../../molecules/profile/Profile";
import LocationIcon from "../../icons/location-icon/LocationIcon";
import CrossIcon from "../../icons/cross-icon/CrossIcon";
import Hr from "../../atoms/hr/Hr";
import Button from "../../atoms/button/Button";

const Review = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Profile
          title="Annette Black"
          subtitle="New York, NY"
          isActive={true}
          subTitleIcon={<LocationIcon/>}
        />
        <button className="inline-flex items-center justify-start rounded-full bg-blue-light p-1 text-paragraph">
          <CrossIcon className="h-4 w-4 stroke-2" />
        </button>
      </div>
      <Hr />

      <div className="flex  items-center justify-between">
        <div>
          <p className="text-paragraph font-medium">Rating</p>
          <p className="inline-flex items-center gap-1">
            <StarIcon />
            <span className="text-paragraph text-gray">5.0</span>
          </p>
        </div>
        <div>
          <p className="text-paragraph font-medium">Certificates</p>
          <p>
            <span className="text-paragraph text-gray">6</span>
          </p>
        </div>
        <div>
          <p className="text-paragraph font-medium">Projects done</p>
          <p>
            <span className="text-paragraph text-gray">45</span>
          </p>
        </div>
      </div>
      <Button className="w-full bg-primary text-white hover:bg-blue-light hover:text-primary">
        Confirm
      </Button>
    </div>
  );
};

export default Review;
