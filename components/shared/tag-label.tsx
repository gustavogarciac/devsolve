import React from "react";

interface TagLabel {
  label: string;
}

export const TagLabel: React.FC<TagLabel> = ({ label }) => {
  return (
    <span className="px-2 py-1 bg-zinc-200 text-zinc-800 text-sm dark:bg-slate-700 dark:text-slate-300 rounded-md w-fit">
      {label}
    </span>
  );
};
