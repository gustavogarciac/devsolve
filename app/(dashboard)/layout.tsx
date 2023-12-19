import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { RightNavbar } from "@/components/right-navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <Header />
      <div className="flex h-full flex-1">
        <Navbar otherClasses="hidden lg:flex max-w-xs" />
        {children}
        <RightNavbar />
      </div>
    </div>
  );
};

export default DashboardLayout;
