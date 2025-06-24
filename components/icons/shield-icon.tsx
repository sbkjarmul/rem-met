import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

interface IconProps extends Omit<BaseIconProps, "src" | "alt"> {}

const ShieldIcon: FC<IconProps> = (props) => {
  return (
    <Icon src="/icons/rem-met-shield-icon.svg" alt="Shield Icon" {...props} />
  );
};

export default ShieldIcon;
