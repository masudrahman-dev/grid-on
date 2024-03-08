import React, { ReactNode } from "react";
import BellAlertIcon from "../../icons/bell-alert-icon/BellAlertIcon";
import Vl from "../../atoms/vl/Vl";
import Avatar from "../../atoms/avatar/Avatar";
import LocationIcon from "../../icons/location-icon/LocationIcon";

interface ProfileProps {
  title: string;
  subtitle?: string;
  src?: string;
  subTitleIcon?: ReactNode;
  isActive?: boolean;
}

const Profile: React.FC<ProfileProps> = ({
  title,
  subtitle,
  src,
  subTitleIcon = <LocationIcon />,
  isActive,
}) => {
  return (
    <div className="flex items-center">
      <BellAlertIcon />
      <Vl />
      <div className="flex items-center gap-4">
        <Avatar src={src} isActive={isActive} />
        <div>
          <h2 className="text-paragraph font-medium">{title}</h2>
          <div className="inline-flex items-center gap-2">
            {subTitleIcon && (
              <span className="text-paragraph text-gray">{subTitleIcon}</span>
            )}
            {subtitle && <p className="text-paragraph text-gray">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
