"use client";
import React, { useState } from "react";
import MagicButton from "./ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Confetti from "react-confetti";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";
import { cn } from "@/lib/utils";
import { socialMedia } from "@/data";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [isConfettiOpen, setIsConfettiOpen] = useState(false);

  const thisYear = new Date().getFullYear();

  const handleCopy = () => {
    navigator.clipboard.writeText("hossammohamed.ib@gmail.com");
    setCopied(true);
    setIsConfettiOpen(true);
    setTimeout(() => {
      setCopied(false);
      setIsConfettiOpen(false);
    }, 3000);
  };
  return (
    <>
      <div
        id="contact"
        className="flex flex-col justify-center relative items-center w-full py-15 md:mt-5 sm:mt-15"
      >
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
        </BackgroundGradientAnimation>

        <div className="justify-center md:max-w-full max-w-60 text-center items-center group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10">
          <div className="font-sans font-bold text-lg lg:text-xl max-w-96 z-10">
            Do you want to start a project together?<br />
            Let&apos;s get in touch
          </div>

          <div className="flex justify-center items-center py-5">
            <MagicButton
              title={copied ? "Email copied" : "Copy my email"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31] cursor-pointer lg:col-span-3 md:col-span-6 md:row-span-1"
            />
            {isConfettiOpen && (
              <Confetti
                confettiSource={{ x: 0, y: 0, w: 300, h: 400 }}
                numberOfPieces={300}
                initialVelocityY={10}
                recycle={false}
                height={200}
                width={400}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex mt-16 flex-col gap-4 justify-center items-center mb-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          {`Copyright © ${thisYear} | Hossam`}
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, name, link }) => (
            <a key={id} href={link} >
              <img
                src={img}
                alt={name}
                className="w-8 h-8 cursor-pointer flex items-center justify-center bg-opacity-75 bg-black-200 rounded-lg border border-black-300 backdrop-filter backrop-blur-xl saturate-180"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
