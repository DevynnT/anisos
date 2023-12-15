"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import TopBanner from "@/components/TopBanner";
import Map from "@/../public/map.png";
import PawSvg from "@/components/Paw-Svg";

export default function Locations() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-[#DFE3DB] rounded-lg shadow-md p-8 w-full h-screen max-w-md relative">
        <TopBanner />
        <Image
          src={Map}
          alt="Map image"
          className="object-cover h-full w-full z-10"
        />
        <button onClick={() => console.log("hi")}>
          <PawSvg />
        </button>
        <NavBar />
      </div>
    </div>
  );
}
