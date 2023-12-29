import { cn } from "@/lib/utils";
import React from "react";

interface TagLabel {
  label: string;
  size?: "default" | "large";
}

export const TagLabel: React.FC<TagLabel> = ({ label, size = "default" }) => {
  return (
    <span
      className={cn(
        "px-2 py-1 bg-zinc-200 text-zinc-800 text-sm dark:bg-slate-700 dark:text-slate-300 rounded-md w-fit",
        size === "large" && "px-3 py-2 text-base"
      )}
    >
      {label}
    </span>
  );
};
