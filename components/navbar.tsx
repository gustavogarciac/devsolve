"use client";

import { cn } from "@/lib/utils";
import { SignOutButton, SignedIn } from "@clerk/nextjs";

import React from "react";
import { Button } from "./ui/button";
import { MobileNavbar } from "./mobile-navbar";
import { LogOutIcon } from "lucide-react";
import { NavItem } from "./nav-item";

interface NavbarProps {
  otherClasses?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ otherClasses }) => {
  return (
    <nav
      className={cn(
        "flex flex-col justify-between flex-1 bg-zinc-50 dark:bg-neutral-900 p-6",
        otherClasses
      )}
    >
      <MobileNavbar />

      <NavItem />

      <SignedIn>
        <SignOutButton>
          <Button className="p-4 justify-start min-h-[56px]" variant={"ghost"}>
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
