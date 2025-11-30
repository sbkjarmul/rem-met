import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

const VersionsIcon: FC<Omit<BaseIconProps, "src" | "alt">> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-versions-icon.svg"
      alt="Versions Icon"
      {...props}
    />
  );
};

export default VersionsIcon;
