import React from "react";

interface TimelineProps {
  steps: number;
  activeStep: number;
}

export const VerticalTimeline: React.FC<TimelineProps> = ({
  steps,
  activeStep = 0,
}) => {
  return (
    <div className="relative flex flex-col items-center w-16 my-auto mx-auto h-[75%]">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-brand-blue-200 z-0" />

      {/* Timeline nodes */}
      {[...Array(steps)].map((_, i) => {
        const top = `calc(${(i / (steps - 1)) * 100}% - 8px)`; // 16px = half node size
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
            <div
              className={`relative w-4 h-4 bg-brand-blue-200 shadow-lg shadow-brand-blue-400/50`}
            >
              {i === activeStep && (
                <>
                  <div className="absolute left-1/2 top-1/2 w-16 h-16 border border-brand-blue-200 opacity-0 -translate-x-1/2 -translate-y-1/2 animate-blink-border delay-1000" />
                  <div className="absolute left-1/2 top-1/2 w-10 h-10 border border-brand-blue-100  opacity-0 -translate-x-1/2 -translate-y-1/2 animate-blink-border delay-500" />
                  <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-brand-blue-50 -translate-x-1/2 -translate-y-1/2 animate-blink" />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
