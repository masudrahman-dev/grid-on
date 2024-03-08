import React from "react";

import clx from "../../utils/clx";
import avatarImg from "../../../assets/avatar.png";
interface AvatarProps {
  className?: string;
  src?: string;
  isActive?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  src,
  isActive = false,
}) => {
  return (
    <div className="relative">
      <img
        className={clx("max-h-12 max-w-12", className)}
        src={src ? src : avatarImg}
        alt="image"
      />
      {isActive && (
        <div className="absolute right-[2px] top-1 z-10  h-2 w-2 rounded-full bg-secondary  ring-2 ring-white"></div>
      )}
    </div>
  );
};

export default Avatar;
