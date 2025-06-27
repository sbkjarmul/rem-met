import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

const ProgressIcon: FC<Omit<BaseIconProps, "src" | "alt">> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-progress-icon.svg"
      alt="Progress Icon"
      {...props}
    />
  );
};

export default ProgressIcon;
