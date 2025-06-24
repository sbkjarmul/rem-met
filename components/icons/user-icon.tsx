import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

interface IconProps extends Omit<BaseIconProps, "src" | "alt"> {}

const UserIcon: FC<IconProps> = (props) => {
  return <Icon src="/icons/rem-met-user-icon.svg" alt="User Icon" {...props} />;
};

export default UserIcon;
