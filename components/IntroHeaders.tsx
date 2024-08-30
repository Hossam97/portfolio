import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const IntroHeaders = () => {
  return (
    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-100">
        Innovating Web Solutions from Frontend to Backend
        </p>
        <TextGenerateEffect
          words="Turning Concepts into Scalable, High-Performance Applications"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
        <p>Hi, I&apos;m Hossam, a full-stack Developer with passion for problem-solving</p>
      </div>
    </div>
  );
};

export default IntroHeaders;
