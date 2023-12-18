import React from "react";
import { Logo } from "./shared/logo";
import { ThemeSwitcher } from "./shared/theme-switcher";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogInIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center justify-between dark:bg-neutral-900 p-6 shadow-sm bg-zinc-50">
      <Logo />
      <div className="flex items-center space-x-3">
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
