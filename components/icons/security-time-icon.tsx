import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

interface IconProps extends Omit<BaseIconProps, "src" | "alt"> {}

const SecurityTimeIcon: FC<IconProps> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-security-time-icon.svg"
      alt="Security Time Icon"
      {...props}
    />
  );
};

export default SecurityTimeIcon;
