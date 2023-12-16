import Link from "next/link";
import Image from "next/image";
import { AnimalForXiao } from "@/fakeDb";

export default function FirstAidAnimalDetail({
  animal,
}: {
  animal: AnimalForXiao;
}) {
  return (
    <div className="overflow-scroll no-scrollbar m-5 gap-5 h-4/5 pb-16">
      <div className="rounded-lg shadow-md p-8 w-full max-w-md bg-gradient-to-t from-[#f09798] via-[#BEAF5E] to-[#b5c96b]">
        <div className="rounded-md flex flex-col justify-center">
          <div className="relative inline-block">
            <Image
              src={animal.imageSrc}
              alt={animal.name}
              width={700}
              height={600}
              className="rounded-lg"
            />
          </div>

          <div>
            <p className="text-3xl mt-3">{animal.name}</p>
            <p className="text-xl italic">{animal.scientificName}</p>
          </div>
          <div className="flex flex-wrap">
            {animal.status.map((s, index) => (
              <p
                key={index}
                className="bg-primary-dark-gray rounded-lg text-xs m-2 p-2 text-white"
              >
                {s}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap mb-3 ml-1 justify-center">
            <Link href={`/first-aid/${animal.name}`}>
              <button className="bg-primary-green rounded-lg text-black m-2 p-2 hover:bg-primary-light-gray w-[300px] shadow-lg">
                <p>Click here for First Aid</p>
              </button>
            </Link>
            <button className="bg-primary-green rounded-lg text-black m-2 p-2 hover:bg-primary-light-gray w-[300px] shadow-lg">
              <p>Locate This Animal to Help</p>
            </button>
            <button className="bg-primary-pink rounded-lg text-black m-2 p-2 hover:bg-primary-light-gray w-[300px] shadow-lg">
              <p>Read More about {animal.name}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
