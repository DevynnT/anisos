import NavBar from "@/components/NavBar";
import TopBanner from "@/components/TopBanner";
import Link from "next/link";
import { getAnimalById } from "@/fakeDbSelina";
import AnimalDetailContainer from "@/components/AnimalDetailContainer";

export default function AnimalDetails({
  params,
}: {
  params: { animalId: string };
}) {
  const animalData = getAnimalById(parseInt(params.animalId));

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-[#DFE3DB] rounded-lg shadow-md p-8 w-full h-screen max-w-md border border-gray-900 relative overflow-hidden">
        <TopBanner />
        {animalData ? <AnimalDetailContainer animal={animalData} /> : null}
        <NavBar />
      </div>
    </div>
  );
}
