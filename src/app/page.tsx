import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-[#DFE3DB] rounded-lg shadow-md p-8 w-full h-screen max-w-md border border-gray-900 overflow-auto">
        <div className="items-center justify-center m-20">
          <div className="grid grid-cols-1 gap-8">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={250}
              height={250}
            />
            <h1
              className="font-extrabold text-5xl text-center"
              style={{ fontFamily: "Koh Santepheap" }}
            >
              aniSOS
            </h1>
          </div>
          <div className="text-center grid grid-rows-3 gap-5 place-self-center w-full relative top-10">
            <Link href="/home">
              <button className="bg-[#B2CC4F] hover:bg-[#F56364] text-black text-xl font-bold rounded-full py-2 w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                Get Started
              </button>
            </Link>

            {/* First Aid Quiz Button */}
            <Link href="/quiz"> {/* Update the href with the correct path to your quiz */}
              <button className="bg-[#B2CC4F] hover:bg-[#F56364] text-black text-xl font-bold rounded-full py-2 w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                First Aid Quiz
              </button>
            </Link>

            <button className="bg-[#B2CC4F] hover:bg-[#F56364] text-black text-xl font-bold rounded-full py-2 w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              Sign In
            </button>
            <p className="text-lg">
              New?{" "}
              <span className="text-[#367510] hover:text-[#F56364] hover:cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
