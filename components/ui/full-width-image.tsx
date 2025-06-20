import * as React from "react";
import Image, { ImageProps } from "next/image";

type FullWidthImageProps = Omit<ImageProps, "width" | "height" | "sizes"> & {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const FullWidthImage = ({
  src,
  width,
  height,
  alt,
  ...props
}: FullWidthImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width} // Used for aspect ratio
      height={height} // Used for aspect ratio
      sizes="100vw" // Tells browser the image is full-width
      style={{
        width: "100%", // Makes the image display at full-width
        height: "auto", //  Makes the height adjust automatically
      }}
      {...props}
    />
  );
};

export { FullWidthImage };
