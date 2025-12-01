import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

const HourglassIcon: FC<Omit<BaseIconProps, "src" | "alt">> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-hourglass-icon.svg"
      alt="Hourglass Icon"
      {...props}
    />
  );
};

export default HourglassIcon;
