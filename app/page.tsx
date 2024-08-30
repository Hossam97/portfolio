import Image from "next/image";
import Intro from "./Intro";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import IntroHeaders from "@/components/IntroHeaders";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Intro />   
      </div>
    </main>
  );
}
