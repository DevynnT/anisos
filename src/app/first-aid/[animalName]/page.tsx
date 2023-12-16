"use client";

import Image from "next/image";
import { getFirstAidDetailByName } from "@/fakeDb";
import TopBanner from "@/components/TopBanner";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function FirstAid({
  params,
}: {
  params: { animalName: string };
}) {
  const animalName = params.animalName;
  const animal = getFirstAidDetailByName(animalName);

  if (!animal) {
    return <div>Animal details not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-[#DFE3DB] rounded-lg shadow-md p-8 w-full h-screen max-w-md border border-gray-900 relative overflow-hidden">
        <TopBanner />
        <div className="m-2">
          <div className="flex items-center justify-between">
            <Link href={`/detail/${animal.name}`}>
              <div className="bg-white/30 w-10 h-9 relative bottom-12 rounded-md flex justify-center items-center">
                <img
                  src="/back-arrow.svg"
                  alt="back-button"
                  className="place-self-center"
                />
              </div>
            </Link>
            <div className="relative inline-block m-4 place-self-end bg-gradient-to-t from-[#f09798] via-[#BEAF5E] to-[#b5c96b] rounded-md">
              <Image
                src={animal.imageSrc}
                alt={animal.name}
                width={150}
                height={150}
                className="rounded-lg m-2"
              />
            </div>
          </div>
        </div>
        <div className="relative bottom-5 overflow-y-auto overflow-scroll no-scrollbar m-5 gap-5 h-4/5 pb-52 overflow-x-hidden">
          <div className="bg-white rounded-md shadow-lg p-2">
            <div className="place-self-center">
              <p className="text-2xl font-semibold m-4">{`This ${animal.name}'s Condition`}</p>
            </div>
            <div className="flex flex-wrap mb-3 ml-1 ">
              {animal.condition.map((c, index) => (
                <span
                  key={index}
                  className="bg-gray-200 rounded-lg text-xs font-semibold m-2 p-2"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="flex flex-col flex-wrap mb-3 ml-1  m-4 p-4 ">
              <p className="text-xl font-bold place-self-center">
                Follow These Steps!
              </p>
              <br></br>
              {animal.steps.map((step, index) => (
                <p key={index}>{step}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col bg-gradient-to-t from-[#f09798] via-[#BEAF5E] to-[#b5c96b] p-4 m-4 rounded-md items-center justify-center">
            <p>{animal.contact.organization}</p>
            <p>{animal.contact.phone}</p>
            <p>{animal.contact.hours}</p>
            <div>
              <button className="bg-primary-green rounded-lg text-black font-semibold m-2 p-2">
                Show on Map
              </button>
              <button className="bg-primary-pink rounded-lg text-black font-semibold m-2 p-2">
                Call
              </button>
            </div>
          </div>
        </div>
        <NavBar />
      </div>
    </div>
  );
}
