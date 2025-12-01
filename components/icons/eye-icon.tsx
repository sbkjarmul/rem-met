import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

const EyeIcon: FC<Omit<BaseIconProps, "src" | "alt">> = (props) => {
  return <Icon src="/icons/rem-met-eye-icon.svg" alt="Eye Icon" {...props} />;
};

export default EyeIcon;
