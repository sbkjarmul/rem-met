import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

const FrontViewIcon: FC<Omit<BaseIconProps, "src" | "alt">> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-front-view-icon.svg"
      alt="Front View Icon"
      {...props}
    />
  );
};

export default FrontViewIcon;
