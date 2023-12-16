"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Fake database
const fakeDatabase = [
  {
    id: 1,
    name: "Bald-Eagle",
    scientificName: "Haliaeetus leucocephalus",
    imageSrc: "/bald-eagle.webp",
    detailsLink: "./detail/bald-eagle",
    status: ["Leg Injured", "Alive", "Female", "Richmond"],
  },
  {
    id: 2,
    name: "Raccoon",
    scientificName: "Procyon lotor",
    imageSrc: "/raccoon.webp",
    detailsLink: "./detail/raccoon",
    status: ["Head Injured", "Alive", "Male", "Vancouver"],
  },
  // Add more data as needed
];

export default function AnimalGrid() {
  const [animals] = useState(fakeDatabase);

  return (
    <>
      {animals.map((animal) => (
        <div
          key={animal.id}
          className="bg-white rounded-3xl flex flex-col justify-center m-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          <div className="relative inline-block m-4">
            <Image
              src={animal.imageSrc}
              alt={animal.name}
              width={400}
              height={300}
              className="rounded-lg"
            />
            <Link href={`/detail/${animal.name}`}>
              <button className="absolute bottom-0 right-0 mb-5 mr-2  rounded-3xl text-white p-2 bg-primary-pink">
                <p>Click here to help</p>
              </button>
            </Link>
          </div>

          <div>
            <p className="text-3xl font-semibold m-4">{animal.name}</p>
            <p className="text-xl m-4 italic ">{animal.scientificName}</p>
          </div>
          <div className="flex flex-wrap mb-3 ml-1 ">
            {animal.status.map((status, index) => (
              <p key={index} className="bg-gray-200 text-xs m-2 p-2">
                {status}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
