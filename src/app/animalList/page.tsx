import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import TopBanner from "@/components/TopBanner";
import { fakeDatabaseAnimal } from "@/fakeDbSelina";
import AnimalListContainer from "@/components/AnimalListContainer";

export default function AnimalList() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-[#DFE3DB] rounded-lg shadow-md p-8 w-full h-screen max-w-md border border-gray-900 relative overflow-hidden">
        <TopBanner />
        <div className="m-5">
          <SearchBar />
        </div>
        <div className="overflow-scroll grid grid-cols-2 m-5 gap-5 h-4/5 pb-10 overflow-x-hidden">
          {fakeDatabaseAnimal.map((animal) => (
            <AnimalListContainer key={animal.id} animal={animal} />
          ))}
        </div>
        <NavBar />
      </div>
    </div>
  );
}
