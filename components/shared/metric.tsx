import React from "react";

interface MetricProps {
  containerClasses?: string;
  value: string;
  icon: React.ReactNode;
}

export const Metric: React.FC<MetricProps> = ({
  containerClasses,
  value,
  icon: Icon,
}) => {
  return (
    <span className="flex flex-row gap-x-2 items-center">
      {Icon}
      {value}
    </span>
  );
};
