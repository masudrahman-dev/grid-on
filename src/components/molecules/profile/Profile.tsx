import React, { ReactNode } from "react";
import BellAlertIcon from "../../icons/bell-alert-icon/BellAlertIcon";
import Vl from "../../atoms/vl/Vl";
import Avatar from "../../atoms/avatar/Avatar";
import clx from "../../utils/clx";

interface ProfileProps {
  title: string;
  subtitle?: string;
  src?: string;
  subTitleIcon?: ReactNode;
  isActive?: boolean;
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({
  title,
  subtitle,
  src,
  subTitleIcon,
  isActive,
  className,
}) => {
  return (
    <div className={clx("hidden items-center gap-4 lg:flex", className)}>
      <Avatar src={src} isActive={isActive} />
      <div className="hidden w-[118px] lg:block">
        <h2 className="text-paragraph  font-medium">{title}</h2>
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
