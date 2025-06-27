import * as React from "react";
import { cn } from "@/lib/utils";

export interface AccentTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const AccentText = ({ className, children, ...props }: AccentTextProps) => {
  return (
    <p
      className={cn(
        "self-stretch font-medium leading-7 text-gray-400 uppercase text-sm md:text-base",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export { AccentText };
