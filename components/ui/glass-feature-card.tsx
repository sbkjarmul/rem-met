import { cn } from "@/lib/utils";
import * as React from "react";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  text: string;
  subtitle?: string;
}

export const GlassFeatureCard = ({
  className,
  text,
  subtitle,
  ...props
}: FeatureCardProps) => {
  const shadowStyle = {
    filter: "drop-shadow(10px 10px 16px 0px rgba(242, 242, 242, 0.5))",
  };

  const clipPathStyle = {
    clipPath: "polygon(0% 65%, 10% 100%, 95% 100%, 100% 35%, 90% 0%, 5% 0%)",
  };

  return (
    <div style={shadowStyle} className={cn("inline-block", className)}>
      <div
        style={clipPathStyle}
        className="bg-gray-500/40 backdrop-blur-xs text-white p-[2px] flex items-center gap-2 w-[170px] sm:w-[260px] h-[60px] sm:h-[80px]"
        {...props}
      >
        <div className="[clip-path:inherit] bg-gray-700/20 backdrop-blur-sm h-full w-full px-4 py-2 flex items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center">
            <span className=" flex-1 font-medium text-white text-xs sm:text-base text-center">
              {text}
            </span>
            <span className="font-medium text-xs">{subtitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
