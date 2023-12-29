import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { RightNavbar } from "@/components/right-navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <Header />
      <div className="flex h-full flex-1">
        <Navbar otherClasses="hidden lg:flex max-w-xs fixed top-16 bottom-0" />
        <div className="flex-1 lg:mx-[320px] lg:mt-[100px] overflow-y-auto">
          {children}
        </div>
        <RightNavbar />
      </div>
    </div>
  );
};

export default DashboardLayout;
