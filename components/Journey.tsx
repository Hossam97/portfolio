import React from "react";
import { Timeline } from "@/components/ui/Timeline";

const Journey = () => {
  // TODO: build an API for the journey data
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="flex items-center gap-5">
            <h1 className="text-xl">Avey</h1>
            <p className="text-xs text-gray-400">Nov 2021 | Present</p>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="flex items-center gap-5">
            <h1 className="text-xl">Avey</h1>
            <p className="text-xs text-gray-400">Nov 2021 | Present</p>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },{
      title: "2022",
      content: (
        <div>
          <div className="flex items-center gap-5">
            <h1 className="text-xl">Avey</h1>
            <p className="text-xs text-gray-400">Nov 2021 | Present</p>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full h-full" id="journey">
      <Timeline data={data} />
    </div>
  );
};

export default Journey;
