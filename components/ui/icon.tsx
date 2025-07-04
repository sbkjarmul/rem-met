import Image from "next/image";
import { FC } from "react";

export interface IconProps {
  src: string;
  alt: string;
  size: number;
  className?: string;
}

export const Icon: FC<IconProps> = ({ src, alt, size = 24, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      unoptimized={true}
    />
  );
};
