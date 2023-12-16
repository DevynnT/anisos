"use client";
import FirstAidAnimalDetail from "@/components/FirstAidAnimalDetail";
import NavBar from "@/components/NavBar";
import TopBanner from "@/components/TopBanner";
import { AnimalForXiao, getAnimalByName } from "@/fakeDb";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function AnimalDetails({
  params,
}: {
  params: { animalName: string };
}) {
  const animalName = params.animalName;
  const animal = getAnimalByName(animalName);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-[#DFE3DB] rounded-lg shadow-md p-8 w-full h-screen max-w-md border border-gray-900 relative overflow-hidden">
        <TopBanner />
        <Link href="/home">
          <div className="bg-white/30 w-10 h-9 mt-3 mb-3 rounded-md flex justify-center items-center">
            <img
              src="/back-arrow.svg"
              alt="back-button"
              className="place-self-center"
            />
          </div>
        </Link>
        <FirstAidAnimalDetail animal={animal as AnimalForXiao} />
        <NavBar />
      </div>
    </div>
  );
}
