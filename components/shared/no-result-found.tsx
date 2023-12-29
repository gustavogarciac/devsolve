import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface NoResultFoundProps {
  title: string;
  description: string;
  cta?: {
    title: string;
    url: string;
  };
  containerClasses?: string;
}

export const NoResultFound: React.FC<NoResultFoundProps> = ({
  title,
  description,
  cta,
  containerClasses,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-6",
        containerClasses
      )}
    >
      <Image
        src={"/assets/no-result-found.svg"}
        alt="No results found"
        width={300}
        height={300}
      />
      <h1 className="text-2xl font-bold text-foreground leading-relaxed text-center">
        {title}
      </h1>

      <p className="w-80 text-center">{description}</p>

      {cta && (
        <Button
          className="bg-orange-500 text-zinc-50 hover:bg-orange-700"
          asChild
        >
          <Link href={cta.url}>{cta.title}</Link>
        </Button>
      )}
    </div>
  );
};
