import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function AnimalList() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-[#DFE3DB] rounded-lg shadow-md p-8 w-full h-screen max-w-md border border-gray-900 overflow-auto relative">
        <NavBar />
      </div>
    </div>
  );
}
