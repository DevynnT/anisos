import { Animal } from "@/fakeDbSelina";
import Link from "next/link";

export default function AnimalListContainer({ animal }: { animal: Animal }) {
  return (
    <div className="group w-40 h-40 rounded-xl bg-gradient-to-t from-[#f09798] via-[#BEAF5E] to-[#b5c96b] grid grid-cols pt-2 items-center justify-center text-center relative">
      <div className="w-20 h-20 bg-white rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] place-self-center relative group-hover:scale-110">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-15 h-15 absolute top-0 left-0 right-0 bottom-0 m-auto transition-all duration-300"
        />
      </div>
      <p className="text-md">{animal.name}</p>
      <Link href={`/details/${animal.id}`}>
        <button className="bg-white text-gray-500 rounded-full shadow-md relative bottom-2 items-center py-1 px-3 flex transition-all duration-300 group-hover:bg-[#b5c96b] group-hover:shadow-lg">
          <img
            src="/paw.svg"
            alt="Home"
            className="w-4 h-4 mr-1 transition-all duration-300"
          />
          <p className="text-center text-xs">View Details</p>
        </button>
      </Link>
    </div>
  );
}
