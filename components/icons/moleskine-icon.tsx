import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

const MoleskineIcon: FC<Omit<BaseIconProps, "src" | "alt">> = (props) => {
  return (
    <Icon
      src="/icons/rem-met-moleskine-icon.svg"
      alt="Moleskine Icon"
      {...props}
    />
  );
};

export default MoleskineIcon;
