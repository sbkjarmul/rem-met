import { FC } from "react";
import { Icon, IconProps as BaseIconProps } from "@/components/ui/icon";

const ProtectIcon: FC<Omit<BaseIconProps, "src" | "alt">> = (props) => {
  return (
    <Icon src="/icons/rem-met-protect-icon.svg" alt="Protect Icon" {...props} />
  );
};

export default ProtectIcon;
