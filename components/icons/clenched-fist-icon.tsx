import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

interface IconProps extends Omit<BaseIconProps, "src" | "alt"> {}

const ClenchedFistIcon: FC<IconProps> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-clenchet-fist-icon.svg"
      alt="Clenched Fist Icon"
      {...props}
    />
  );
};

export default ClenchedFistIcon;
