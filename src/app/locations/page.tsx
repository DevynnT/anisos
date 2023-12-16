"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import TopBanner from "@/components/TopBanner";
import Map from "@/../public/map.png";
import PawSvg from "@/components/Paw-Svg";
import { useState } from "react";
import Link from "next/link";

export default function Locations() {
  const [visible, setVisible] = useState(false);
  const assistance = {
    name: 'BC SPCA Vancouver',
    phone: '(604)-879-7721',
    hours: 'Office Hour: 8:00 AM - 10:30 PM', 
  };
  const resultData = { assistance }

  const handleOnClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-[#DFE3DB] rounded-lg shadow-md p-8 w-full h-screen max-w-md relative">
        <TopBanner />
        <Image
          src={Map}
          alt="Map image"
          className="object-cover h-full w-full z-10"
        />
        {visible && (
          <div>
            <div className="green-gradient p-4 rounded-lg my-4">
              <p>If you need more assistance ...</p>
              <p className="font-bold">{resultData.assistance.name}</p>
              <p>{resultData.assistance.phone}</p>
              <p>{resultData.assistance.hours}</p>
            </div>

            <div className="flex justify-around">
              <button className="p-2 bg-green-400 rounded-full text-black flex items-center">
                <span className="flex items-center">
                  <Image
                    src="/save.svg"
                    alt="Map Icon"
                    width={20}
                    height={20}
                  />
                  <span className="ml-2">Show on Map</span>
                </span>
              </button>
              <Link href={`tel:${resultData.assistance.phone}`}>
                <div className="p-2 bg-green-400 rounded-full text-black flex items-center">
                  <span className="flex items-center">
                    <Image
                      src="/call.svg"
                      alt="Call Icon"
                      width={20}
                      height={20}
                    />
                    <span className="ml-2">Please call us</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        )}
        <button onClick={handleOnClick}>
          <PawSvg />
        </button>
        <NavBar />
      </div>
    </div>
  );
}
