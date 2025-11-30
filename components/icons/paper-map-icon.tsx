import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

const PaperMapIcon: FC<Omit<BaseIconProps, "src" | "alt">> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-paper-map-icon.svg"
      alt="Paper Map Icon"
      {...props}
    />
  );
};

export default PaperMapIcon;
