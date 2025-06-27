import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

type IconProps = Omit<BaseIconProps, "src" | "alt">;

const ToolIcon: FC<IconProps> = (props) => {
  return <Icon src="/icons/rem-met-tool-icon.svg" alt="Tool Icon" {...props} />;
};

export default ToolIcon;
