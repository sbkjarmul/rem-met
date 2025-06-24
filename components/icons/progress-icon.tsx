import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

interface IconProps extends Omit<BaseIconProps, "src" | "alt"> {}

const ProgressIcon: FC<IconProps> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-progress-icon.svg"
      alt="Progress Icon"
      {...props}
    />
  );
};

export default ProgressIcon;
