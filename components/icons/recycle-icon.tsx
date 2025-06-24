import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

interface IconProps extends Omit<BaseIconProps, "src" | "alt"> {}

const RecycleIcon: FC<IconProps> = (props) => {
  return (
    <Icon src="/icons/rem-met-recycle-icon.svg" alt="Recycle Icon" {...props} />
  );
};

export default RecycleIcon;
