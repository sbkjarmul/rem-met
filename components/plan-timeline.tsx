import { cn } from "@/lib/utils";
import { VerticalTimeline } from "./ui/vertical-timeline";

interface PlanStepProps {
  title: string;
  description: string;
  index: number;
  isActive: boolean;
}

const PlanStep: React.FC<PlanStepProps> = ({
  title,
  description,
  index,
  isActive,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-0 md:gap-6 items-start md:items-center`}
      style={{
        animationDelay: `${index * 2000}ms`,
      }}
    >
      <span
        className={cn(
          `text-[60px] leading-none md:text-[80px] font-medium w-[124px] transition-all duration-300`,
          {
            "text-brand-blue-50": isActive,
            "text-gray-800": !isActive,
          }
        )}
      >
        0{index}
      </span>
      <div className="flex flex-col gap- flex-1">
        <h3
          className={cn(`text-2xl font-medium  transition-all duration-300`, {
            "text-gray-100": isActive,
            "text-gray-500": !isActive,
          })}
        >
          {title}
        </h3>
        <p
          className={cn(`text-sm md:text-md transition-all duration-300`, {
            "text-gray-400": isActive,
            "text-gray-600": !isActive,
          })}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

interface PlanTimelineProps {
  activeStep: number;
  steps: { title: string; description: string }[];
}

const PlanTimeline = ({ activeStep, steps }: PlanTimelineProps) => {
  return (
    <div className="grid grid-cols-[80px_1fr] grid-rows-[1fr] gap-x-0 gap-y-4 w-full h-full">
      <VerticalTimeline steps={steps.length} activeStep={activeStep} />

      <div className="flex flex-col justify-between h-full gap-10 md:gap-4">
        {steps.map((step, index) => (
          <PlanStep
            index={index + 1}
            title={step.title}
            description={step.description}
            isActive={activeStep === index}
            key={step.title}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanTimeline;
