import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <Header />
      <div className="flex h-full flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
