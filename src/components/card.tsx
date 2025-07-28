import React, { ReactNode } from "react";

interface CardType {
  title: string;
  srcTitle: string;
  src?: string;
  icon?: ReactNode;
  onClick?: VoidFunction;
}

export default function Card({
  srcTitle,
  src,
  title,
  icon,
  onClick,
}: CardType) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (src) {
      window.open(src, "_blank");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative group w-[300px] h-[200px] rounded-md shadow-card cursor-pointer transition-all p-3 flex items-center justify-center border border-transparent duration-700 hover:border-hbl-green"
    >
      <h2 className="text-center text-gray-600 font-semibold text-2xl">
        {title}
      </h2>
      <span className="flex items-center gap-2 text-hbl-green font-semibold absolute bottom-0 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-7">
        {srcTitle} {icon && icon}
      </span>
    </div>
  );
}
