"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
// import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import axiosInstance from "@/axios";

const Projects = () => {
  interface Technology {
    id: number;
    name: string;
    icon: string;
  }
  interface Project {
    id: number;
    title: string;
    desc: string;
    img: string;
    href: string;
    github: string;
    techStack: Technology[];
  }
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const getProjects = async () => {
      await axiosInstance
        .get("projects/")
        .then((res) => {
          console.log(res);
          setProjects(res.data);
        })
        .catch((err) => console.log(err));
    };
    getProjects();
  }, []);
  return (
    <div id="projects" className="py-20">
      <div className="flex items-center justify-center text-2xl md:text-4xl">
        <h1 className="heading">
          A list of some of my{" "}
          <span className="text-purple">recent projects</span>
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, desc, img, href, github, techStack }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex flex-wrap items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={github} href={github}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bg-img" />
                </div>
                {img ? (
                  <img
                    src={`http://127.0.0.1:8000/${img}`}
                    alt="cover"
                    className="absolute h-full w-full"
                  />
                ) : (
                  <img src="/coding.jpeg" alt="coding" />
                )}
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-md lg:font-normal font-light text-sm overflow-"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {desc}
              </p>
            </PinContainer>
            <div className="flex items-center justify-center w-10 h-10 bg-red md:mt-10">
              <div className="flex items-center justify-center mt-7 mb-3">
                <div className="flex items-center">
                  {techStack.map(({ id, name, icon }) => (
                    <div
                      key={id}
                      className="flex justify-center items-center border border-white/[.2] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8"
                      style={{ transform: "translateX(-20px)" }}
                    >
                      {
                        <img
                          src={`http://127.0.0.1:8000${icon}`}
                          alt={`${name} icon`}
                          className="p-2"
                        />
                      }
                    </div>
                  ))}
                </div>
                {href && (
                  <div className="flex flex-row justify-center items-center min-w-full">
                    <a
                      href={href}
                      target="_blank"
                      className="lg:text-xl md:text-xs text-sm text-purple hover:underline"
                    >
                      Live demo
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
