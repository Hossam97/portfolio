import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

const MagicButton = ({
  title,
  icon,
  position,
  href,
  handleClick,
  otherClasses
}: {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <a href={href} className="md:mt-5 flex flex-col items-center justify-center">
      <button onClick={handleClick} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </a>
  );
};

export default MagicButton;
