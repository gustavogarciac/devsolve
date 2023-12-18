"use client";

import { cn } from "@/lib/utils";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import {
  Briefcase,
  HomeIcon,
  LogOutIcon,
  MessageCircleQuestion,
  StarIcon,
  TagIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

export const Navbar = () => {
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
    <nav className="hidden lg:flex flex-col justify-between max-w-xs flex-1 dark:bg-neutral-900 p-6">
      <div className="space-y-4 flex-1">
        {routes.map((route) => (
          <Link
            key={route.name}
            href={route.path}
            className={cn(
              "w-full flex items-center p-4 rounded-md hover:bg-zinc-800",
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
      <SignedIn>
        <SignOutButton>
          <Button className="p-4 justify-start" variant={"ghost"}>
            <div className="flex gap-x-4 items-center">
              <LogOutIcon className="h-7 w-7" />
              <span className="font-medium text-lg">Logout</span>
            </div>
          </Button>
        </SignOutButton>
      </SignedIn>
    </nav>
  );
};
