"use client";
import React, {useState, useEffect} from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import MagicButton from "./ui/MagicButton";
import { FaFileDownload } from "react-icons/fa";
import axiosInstance from "@/axios";
import {SyncLoader} from "react-spinners"; 

export function Resume() {
    const [resume, setResume] = useState('');
  useEffect(() => {
    const getMostRecentResume = async () => {
      await axiosInstance.get('resumes/last-resume')
      .then((res) => {
        setResume(res.data.file_path);
      })
      .catch((err) => console.log(err))
    }
    getMostRecentResume();
  }, [])
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mb-5")}>
        Download my resume
      </h1>
      <MagicButton
        title={resume.length > 0 ? "Download" : "Resume is loading"}
        icon={resume.length > 0 ? <FaFileDownload /> : <SyncLoader size={10} color="#ffffff" />}
        href={`http://127.0.0.1:8000${resume}`}
        position="left"
        disabled={!(resume.length > 0)}
        otherClasses="text-center text-neutral-300 w-full"
      />
    </div>
  );
}
