import { Animal } from "@/fakeDbSelina";
import Link from "next/link";

export default function AnimalDetailContainer({ animal }: { animal: Animal }) {
  return (
    <div className="h-3/4 w-96 mt-6 bg-gradient-to-t from-[#f09798] via-[#BEAF5E] to-[#b5c96b] rounded-2xl grid grid-cols-3 p-2 gap-3">
      <Link href="/animalList">
        <div className="bg-white/30 w-10 h-9 rounded-md flex justify-center items-center">
          <img
            src="/back-arrow.svg"
            alt="back-button"
            className="place-self-center"
          />
        </div>
      </Link>
      <p className="col-span-2 text-3xl font-extrabold relative left-5">
        {animal.name}
      </p>
      <div className="col-span-3 flex justify-center items-center relative bottom-3">
        <div className="flex flex-col justify-center items-center">
          <div className="w-48 h-48 bg-black rounded-md overflow-hidden">
            <img
              src={animal.detailImage}
              alt={animal.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-80 h-32 px-5 py-2 bg-white rounded-t-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] relative bottom-5 overflow-auto overflow-x-hidden ">
            <p className="text-sm">
              <span className="text-[#9ab141]">Scientific Name: </span>{" "}
              {animal.scientificName}
            </p>
            <p className="text-sm">
              <span className="text-[#9ab141]">Domain: </span> {animal.domain}
            </p>
            <p className="text-sm">
              <span className="text-[#9ab141]">About: </span> {animal.about}
            </p>
            <p className="text-sm">
              <span className="text-[#9ab141]">Conservation Status: </span>{" "}
              {animal.conservationStatus}
            </p>
          </div>
          <Link href="/firstAid">
            <button className="bg-[#B2CC4F] hover:bg-[#F56364] text-black text-xl font-bold rounded-full py-2 px-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              <h4>First Aid</h4>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
