import { QuestionWithTags } from "@/@types";
import React from "react";
import { TagLabel } from "../shared/tag-label";
import { format, formatDistanceToNow } from "date-fns";
import { EyeIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";

interface HomeCardProps {
  data: QuestionWithTags;
}

export const HomeCard = ({ data }: HomeCardProps) => {
  return (
    <li className="rounded-md flex flex-col space-y-4 dark:bg-neutral-900 bg-zinc-50 shadow dark:shadow-none p-9">
      <h2 className="text-2xl font-bold leading-relaxed line-clamp-2">
        {data.title}
      </h2>
      <div className="flex flex-wrap gap-2 items-center">
        {data.tags.map((tag) => (
          <TagLabel key={tag.id} label={tag.name} />
        ))}
      </div>

      <div className="flex xl:flex-row flex-col justify-between gap-2">
        <div className="flex flex-row gap-x-2 items-center">
          {/* TODO: Author Name */}
          <span className="truncate">Author name...</span>
          <span>-</span>
          <span>asked {formatDistanceToNow(data.createdAt)} ago.</span>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <span className="flex flex-row gap-x-2 items-center">
            <ThumbsUpIcon className="h-4 w-4 text-foreground" />
            Votes
          </span>
          <span className="flex flex-row gap-x-2 items-center">
            <MessageCircleIcon className="h-4 w-4 text-foreground" />
            Answers
          </span>
          <span className="flex flex-row gap-x-2 items-center">
            <EyeIcon className="h-4 w-4 text-foreground" />
            Views
          </span>
        </div>
      </div>
    </li>
  );
};
