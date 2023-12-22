import React from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface LocalSearchProps {
  placeholder: string;
  icon?: React.ReactNode;
  containerClasses?: string;
}

export const LocalSearch: React.FC<LocalSearchProps> = ({
  placeholder,
  icon: Icon,
  containerClasses,
}) => {
  return (
    <div
      className={cn(
        "flex gap-x-2 items-center bg-zinc-50 dark:bg-neutral-900 px-2 py-1 rounded-md",
        containerClasses
      )}
    >
      {Icon && Icon}
      <Input
        placeholder={placeholder}
        className="w-full bg-transparent border-none"
      />
    </div>
  );
};
