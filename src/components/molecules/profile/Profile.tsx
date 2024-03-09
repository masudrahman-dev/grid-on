import React, { ReactNode } from "react";
import BellAlertIcon from "../../icons/bell-alert-icon/BellAlertIcon";
import Vl from "../../atoms/vl/Vl";
import Avatar from "../../atoms/avatar/Avatar";

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
  subTitleIcon,
  isActive,
}) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar src={src} isActive={isActive} />
      <div className="w-[118px]">
        <h2 className="text-paragraph font-medium">{title}</h2>
        {subtitle && (
          <div className="inline-flex items-center gap-2">
            {subTitleIcon && (
              <span className="text-paragraph text-gray">{subTitleIcon}</span>
            )}
            {subtitle && (
              <p className="text-paragraph  text-gray">{subtitle}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
