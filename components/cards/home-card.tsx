import { QuestionWithTags } from "@/@types";
import React from "react";
import { TagLabel } from "../shared/tag-label";
import { formatDistanceToNow } from "date-fns";
import { EyeIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";
import { Metric } from "../shared/metric";

interface HomeCardProps {
  data: QuestionWithTags;
}

export const HomeCard = ({ data }: HomeCardProps) => {
  return (
    <Link
      href={`/question/${data.id}`}
      className="rounded-md flex flex-col space-y-4 dark:bg-neutral-900 bg-zinc-50 shadow dark:shadow-none p-9"
    >
      <h2 className="text-2xl font-bold leading-relaxed line-clamp-2">
        {data.title}
      </h2>
      <div className="flex flex-wrap gap-2 items-center">
        {data.tags.map((tag) => (
          <TagLabel key={tag.id} label={tag.name} />
        ))}
      </div>

      <p>{data.description}</p>

      <div className="flex xl:flex-row flex-col justify-between gap-2">
        <div className="flex flex-row gap-x-2 items-center">
          {/* TODO: Author Name */}
          <span className="truncate">Author name...</span>
          <span>-</span>
          <span>asked {formatDistanceToNow(data.createdAt)} ago.</span>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Metric
            icon={<ThumbsUpIcon className="h-4 w-5 text-foreground" />}
            value={`Likes`}
          />
          <Metric
            icon={<MessageCircleIcon className="h-4 w-5 text-foreground" />}
            value={`Answers`}
          />
          <Metric
            icon={<EyeIcon className="h-4 w-5 text-foreground" />}
            value={`Views`}
          />
        </div>
      </div>
    </Link>
  );
};
