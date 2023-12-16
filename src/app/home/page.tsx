import Image from "next/image";
import Dropdown from "@/components/dropdown";
import AnimalGrid from "@/components/animal-grid";
import NavBar from "@/components/NavBar";
import TopBanner from "@/components/TopBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="rounded-lg shadow-md p-8 bg-[#DFE3DB] w-full h-screen max-w-md border border-gray-900 relative overflow-hidden">
        <TopBanner />
        <div className="pt-3 flex justify-center items-center mb-3">
          <p className="text-3xl text-center">
            Animals who need
            <br />
            your{" "}
            <span className="max-w-xl inline-block bg-[#b5c96b] font-bold px-1">
              help
            </span>{" "}
            in your area!
          </p>
        </div>

        <div className="flex justify-center items-center mb-3">
          <Dropdown defaultValue={"Filter"} options={["Bird", "Reptile"]} />
          <Dropdown
            defaultValue={"Size"}
            options={["Small", "Medium", "Large"]}
          />
          <Dropdown
            defaultValue={"Location"}
            options={["Vancouver", "Richmond", "Burnaby"]}
          />
        </div>

        <div className="flex justify-center">
          <p>Scroll down to see more!</p>
        </div>
        <div className="overflow-scroll no-scrollbar m-5 gap-5 h-4/5 pb-52 ">
          <AnimalGrid />
        </div>

        <NavBar />
      </div>
    </div>
  );
}
