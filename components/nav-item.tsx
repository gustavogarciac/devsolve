"use client";

import React from "react";

import {
  Briefcase,
  HomeIcon,
  MessageCircleQuestion,
  StarIcon,
  TagIcon,
  Users,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const NavItem = () => {
  const pathname = usePathname();
  const routes = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon className="h-7 w-7" />,
    },
    {
      name: "Collections",
      path: "/collections",
      icon: <StarIcon className="h-7 w-7" />,
    },
    {
      name: "Find Jobs",
      path: "/jobs",
      icon: <Briefcase className="h-7 w-7" />,
    },
    {
      name: "Tags",
      path: "/tags",
      icon: <TagIcon className="h-7 w-7" />,
    },
    {
      name: "Communities",
      path: "/communities",
      icon: <Users className="h-7 w-7" />,
    },
    {
      name: "Ask a Question",
      path: "/ask-question",
      icon: <MessageCircleQuestion className="h-7 w-7" />,
    },
  ];

  return (
    <>
      <div className="space-y-4 flex-1">
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.path}
            className={cn(
              "w-full flex items-center p-4 rounded-md dark:hover:bg-zinc-800 hover:bg-zinc-950/10",
              pathname === route.path &&
                "bg-gradient-to-r from-orange-500 to-orange-400 text-zinc-50"
            )}
          >
            <div className="flex gap-x-4 items-center">
              {route.icon}
              <span className="font-medium text-lg">{route.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
