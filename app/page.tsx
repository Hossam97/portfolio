import Image from "next/image";
import Intro from "./Intro";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import IntroHeaders from "@/components/IntroHeaders";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import Projects from "../components/Projects";

export default function Home() {
  const navBarSections = [
    {name: "Home", link: "/", icon: <FaHome />}
  ]
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navBarSections}/>
        <Intro />
        <Grid />   
        <Projects />
      </div>
    </main>
  );
}
