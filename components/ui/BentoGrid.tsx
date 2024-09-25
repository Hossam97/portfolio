"use client";

import { cn } from "../../lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import { useEffect, useState } from "react";
import animationData from "../../data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Confetti  from "react-confetti";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isConfettiOpen, setIsConfettiOpen] = useState(false);

  const techStack = {
    left: ["Nodejs", "Django", "MongoDB"],
    right: ["React.js", "Next.js", "Typescript"],
  };
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCopy = async() => {
    navigator.clipboard.writeText("hossammohamed.ib@gmail.com");
    setCopied(true);
    setIsConfettiOpen(true);
    setTimeout(() => {
      setCopied(false);
      setIsConfettiOpen(false);
    }, 3000)
  };

  return (
    <div
      className={cn(
        "row-span-1 relative rounded-xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(125,125,128,1) 35%, rgba(141,160,164,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 2 && <GlobeDemo />}

          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className={`font-sans font-bold text-lg lg:text-xl max-w-96 z-10`}>
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-4 w-fit absolute md:-bottom-28 -right-3 lg:-right-16">
              <div className="flex flex-col gap-4 lg:gap-8">
                {techStack.left.map((technology) => (
                  <span
                    key={technology}
                    className="py-2 lg:py4 px-3 text-xs lg:text-base text-gray-400 opacity-50 lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                  >
                    {technology}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-xl text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-xl text-center bg-[#10132E]" />
                {techStack.right.map((technology) => (
                  <span
                    key={technology}
                    className="py-2 lg:py4 px-3 text-xs lg:text-base text-gray-400 opacity-50 lg:opacity-100 rounded-xl text-center bg-[#10132E]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative w-full">
              <div className={`absolute md:bottom-25`}>
                {isConfettiOpen && <Confetti confettiSource={{x: 50, y: -200, w: 300, h: 400}} numberOfPieces={300} initialVelocityY={10} recycle={false} height={200} width={400} />}
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

