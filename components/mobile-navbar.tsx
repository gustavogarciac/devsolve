"use client";

import React, { useEffect, useState } from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import { useMobileNavbar } from "@/hooks/use-mobile-navbar";
import { NavItem } from "./nav-item";
import { SignOutButton, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

export const MobileNavbar = () => {
  const user = useUser();

  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, onClose, onOpen] = useMobileNavbar((state) => [
    state.isOpen,
    state.onClose,
    state.onOpen,
  ]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="bg-zinc-50 dark:bg-neutral-900 py-12 flex flex-col justify-between">
        <div className="flex items-center gap-x-4 mb-4">
          <UserButton />
          <div>
            <span className="text-sm text-foreground font-medium">
              {user.user?.fullName}
            </span>
            <span className="text-xs text-muted-foreground">
              {user.user?.username}
            </span>
          </div>
        </div>

        <NavItem />

        <SignedIn>
          <SignOutButton>
            <Button
              className="p-4 justify-start min-h-[56px]"
              variant={"ghost"}
            >
              <div className="flex gap-x-4 items-center">
                <LogOutIcon className="h-7 w-7" />
                <span className="font-medium text-lg">Logout</span>
              </div>
            </Button>
          </SignOutButton>
        </SignedIn>
      </SheetContent>
    </Sheet>
  );
};
