import React from "react";

interface HeadingProps {
  title: string;
}

export const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h1 className="font-bold text-3xl">{title}</h1>;
};
