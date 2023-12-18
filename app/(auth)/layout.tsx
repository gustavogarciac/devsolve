import React from "react";

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-[url('/assets/auth-background.png')] bg-fixed bg-center bg-no-repeat">
      {children}
    </div>
  );
};

export default Authlayout;
