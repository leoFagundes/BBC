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
      className="flex flex-col relative w-[300px] h-[200px] rounded-sm shadow-card cursor-pointer transition-all items-center justify-center outline-transparent outline duration-500 hover:outline-primary-green"
    >
      <div className="flex-1 flex justify-center items-center p-2">
        <h2 className="text-center text-gray-600 font-semibold text-2xl ">
          {title}
        </h2>
      </div>
      <div className="h-[50px] bg-primary-green w-full rounded-b-sm flex justify-center items-center text-white font-semibold text-xl">
        {srcTitle}
      </div>
    </div>
  );
}
