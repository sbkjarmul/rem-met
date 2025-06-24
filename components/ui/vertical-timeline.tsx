import React from "react";

interface TimelineProps {
  steps?: number;
}

export const VerticalTimeline: React.FC<TimelineProps> = ({ steps = 5 }) => {
  return (
    <div className="relative flex flex-col items-center h-[400px] w-16 mx-auto">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-brand-blue-200 z-0" />

      {/* Timeline nodes */}
      {[...Array(steps)].map((_, i) => {
        const top = `calc(${(i / (steps - 1)) * 100}% - 16px)`; // 16px = half node size
        return (
          <div
            key={i}
            className="absolute z-10"
            style={{
              top,
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          >
            {/* Emphasis squares for the first node */}
            {i === 0 && (
              <>
                <div className="absolute left-1/2 top-1/2 w-16 h-16 border border-brand-blue-200 opacity-40 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute left-1/2 top-1/2 w-10 h-10 border border-brand-blue-200 opacity-80 -translate-x-1/2 -translate-y-1/2" />
              </>
            )}
            {/* Main node */}
            <div className="w-4 h-4 bg-brand-blue-200 shadow-lg shadow-brand-blue-400/50" />
          </div>
        );
      })}
    </div>
  );
};
