import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="py-20">
      <div className="flex items-center justify-center text-2xl md:text-4xl">
        <h1 className="heading">
          A list of some of my{" "}
          <span className="text-purple">recent projects</span>
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt="cover" className="absolute bottom-0" />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {des}
              </p>
              <div className="flex items-center justify-center mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img
                        src={icon}
                        alt={`icon${index + 1}`}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Live demo
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
