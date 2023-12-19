import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  otherClasses?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  otherClasses,
  children,
}) => {
  return (
    <div className={cn("p-6 flex flex-col w-full h-full", otherClasses)}>
      {children}
    </div>
  );
};
