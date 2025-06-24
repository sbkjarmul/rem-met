import { cn } from "@/lib/utils";
import * as React from "react";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  text: string;
  subtitle?: string;
}

export const FeatureCard = ({
  className,
  icon,
  text,
  subtitle,
  ...props
}: FeatureCardProps) => {
  const shadowStyle = {
    filter: "drop-shadow(0 0 16px rgba(0, 0, 0, 0.5))",
  };

  const clipPathStyle = {
    clipPath: "polygon(0% 65%, 10% 100%, 95% 100%, 100% 35%, 90% 0%, 5% 0%)",
  };

  return (
    <div style={shadowStyle} className={cn("inline-block", className)}>
      <div
        style={clipPathStyle}
        className="bg-brand-blue-200 text-white px-8 py-6 flex items-center gap-2 w-[260px] h-[80px]"
        {...props}
      >
        <div className="flex-shrink-0 text-brand-blue-300">{icon}</div>
        <div className="flex flex-col">
          <span className="font-medium text-white text-base line-he">
            {text}
          </span>
          <span className="font-medium text-xs">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};
