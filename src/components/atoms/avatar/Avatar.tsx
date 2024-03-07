import React from "react";
import avatarImg from "../../../assets/avatar.png";
import clx from "../../utils/clx";

interface AvatarProps {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return <img className={clx("", className)} src={avatarImg} alt="image" />;
};

export default Avatar;
