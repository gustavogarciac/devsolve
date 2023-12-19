import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TagLabel } from "./shared/tag-label";

export const RightNavbar = () => {
  return (
    <div className="flex flex-col justify-between bg-zinc-50 dark:bg-neutral-900 p-6 w-full max-w-[20rem]">
      <div className="space-y-4">
        <h2 className="font-bold text-lg">Hot Network</h2>
        <Link href={""} className="flex items-center justify-between">
          <p className="text-sm line-clamp-2 flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            aut. Numquam odit corporis odio cumque harum, dolore possimus saepe
            ratione esse ipsa unde quam sit sunt, ipsam quisquam, totam tenetur.
          </p>
          <ChevronRight />
        </Link>
        <Link href={""} className="flex items-center justify-between">
          <p className="text-sm line-clamp-2 flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            aut. Numquam odit corporis odio cumque harum, dolore possimus saepe
            ratione esse ipsa unde quam sit sunt, ipsam quisquam, totam tenetur.
          </p>
          <ChevronRight />
        </Link>
        <Link href={""} className="flex items-center justify-between">
          <p className="text-sm line-clamp-2 flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            aut. Numquam odit corporis odio cumque harum, dolore possimus saepe
            ratione esse ipsa unde quam sit sunt, ipsam quisquam, totam tenetur.
          </p>
          <ChevronRight />
        </Link>
      </div>

      <div className="space-y-4">
        <h2 className="font-bold text-lg">Popular Tags</h2>
        <div className="flex justify-between items-center">
          <TagLabel label="Testing" />
          <span className="text-sm text-foreground">9872+</span>
        </div>
        <div className="flex justify-between items-center">
          <TagLabel label="Testing" />
          <span className="text-sm text-foreground">9872+</span>
        </div>
        <div className="flex justify-between items-center">
          <TagLabel label="Testing" />
          <span className="text-sm text-foreground">9872+</span>
        </div>
        <div className="flex justify-between items-center">
          <TagLabel label="Testing" />
          <span className="text-sm text-foreground">9872+</span>
        </div>
        <div className="flex justify-between items-center">
          <TagLabel label="Testing" />
          <span className="text-sm text-foreground">9872+</span>
        </div>
        <div className="flex justify-between items-center">
          <TagLabel label="Testing" />
          <span className="text-sm text-foreground">9872+</span>
        </div>
        <div className="flex justify-between items-center">
          <TagLabel label="Testing" />
          <span className="text-sm text-foreground">9872+</span>
        </div>
      </div>
    </div>
  );
};
