"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import TopBanner from '@/components/TopBanner';
import NavBar from '@/components/NavBar';

const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toDateString());
  }, []);

  return currentDate;
};

const generateResultData = (selections: string[]) => {
  const tips = [];

  const condition = selections[0] || "Unknown";
  const consciousness = selections[1] || "Unknown";
  const bleeding =
    selections[2] === "Yes"
      ? "Bleeding or Open Wounds"
      : "No Bleeding or Open Wounds";

  if (condition === "Head") {
    tips.push(
      "Be careful not to move the animal too much as it might have a head injury."
    );
  } else if (condition === "Legs" || condition === "Arms") {
    tips.push("Check for possible fractures or strains.");
  } else {
    tips.push("Observe the animal closely for any signs of injury.");
  }

  if (consciousness === "Unconscious") {
    tips.push("Do not give any food or water as it could cause choking.");
  } else {
    tips.push("Try to keep the animal calm and quiet.");
  }

  if (bleeding === "Bleeding or Open Wounds") {
    tips.push("Apply gentle pressure to the wound to stop bleeding.");
  } else {
    tips.push("Ensure the animal is comfortable and not in distress.");
  }

  const assistance = {
    name: "BC SPCA Vancouver",
    phone: "(604)-879-7721",
    hours: "Office Hour: 8:00 AM - 10:30 PM",
  };

  return { condition, consciousness, bleeding, tips, assistance };
};

const ResultPage = () => {
  const [selections, setSelections] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const selectionsParam = searchParams.get("selections");
    if (selectionsParam) {
      setSelections(JSON.parse(decodeURIComponent(selectionsParam)));
    }
  }, []);

  const resultData = generateResultData(selections);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md">
      <TopBanner /> 
      
      <div className="p-8">
        <div className="mb-4 rounded-full shadow p-2 flex items-center justify-center">
          <span className="text-lg font-semibold">Here is the First Aid for this animal!</span>
          </div>

          <div className="mb-4">
            <p>According to you, this animal is ...</p>
            <div className="flex justify-around my-4">
              <span className="p-2 bg-gray-200 rounded-full">
                {resultData.condition}
              </span>
              <span className="p-2 bg-gray-200 rounded-full">
                {resultData.consciousness}
              </span>
            </div>
            <p>{resultData.bleeding}</p>
          </div>

          {resultData.tips.map((tip, index) => (
            <div key={index} className="flex items-center mb-2">
              <Image src="/tip.svg" alt="Tip Icon" width={20} height={20} />
              <span className="ml-2">{tip}</span>
            </div>
          ))}

          <div className="green-gradient p-4 rounded-lg my-4">
            <p>If you need more assistance ...</p>
            <p className="font-bold">{resultData.assistance.name}</p>
            <p>{resultData.assistance.phone}</p>
            <p>{resultData.assistance.hours}</p>
          </div>

          <div className="flex justify-around">
            <button className="p-2 bg-green-400 rounded-full text-black flex items-center">
              <span className="flex items-center">
                <Image src="/save.svg" alt="Map Icon" width={20} height={20} />
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
        <NavBar />
      </div>
    </div>
  );
}

export default ResultPage;