import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-x-2 items-center">
      <Image src="/assets/logo.svg" alt="DevSolve" width={40} height={40} />
      <h1 className="font-spaceGrotesk text-2xl font-bold">
        Dev<strong className="text-orange-500">Solve</strong>
      </h1>
    </Link>
  );
};
