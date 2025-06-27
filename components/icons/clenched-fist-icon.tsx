import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

const ClenchedFistIcon: FC<Omit<BaseIconProps, "src" | "alt">> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-clenchet-fist-icon.svg"
      alt="Clenched Fist Icon"
      {...props}
    />
  );
};

export default ClenchedFistIcon;
