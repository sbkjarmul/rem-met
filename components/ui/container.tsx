import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("mx-auto w-full max-w-[1140px] px-5", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container };
