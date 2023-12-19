"use client";

import React from "react";
import { Logo } from "./shared/logo";
import { ThemeSwitcher } from "./shared/theme-switcher";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { LogInIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MobileNavbar } from "./mobile-navbar";
import { useMobileNavbar } from "@/hooks/use-mobile-navbar";

export const Header = () => {
  const [onOpen] = useMobileNavbar((state) => [state.onOpen]);

  return (
    <div className="flex items-center justify-between dark:bg-neutral-900 p-6 shadow-sm bg-zinc-50">
      <Logo />
      <Button variant={"ghost"} onClick={onOpen} className="lg:hidden">
        <MenuIcon className="h-6 w-6" />
      </Button>
      <div className="hidden lg:flex items-center space-x-3">
        <ThemeSwitcher />
        <UserButton />
        <SignedOut>
          <Button variant="ghost" asChild size={"icon"}>
            <Link href="/sign-in">
              <LogInIcon className="w-6 h-6 text-foreground" />
            </Link>
          </Button>
        </SignedOut>
      </div>
    </div>
  );
};
