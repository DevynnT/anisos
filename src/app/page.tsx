import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="rounded-lg shadow-md p-8 w-full max-w-md green-gradient">
        <div className="grid grid-rows-5 items-center justify-center my-10">
          <div className="place-self-stretch row-span-2">
            <Image
              src="/logo.svg"
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </div>
          <h1
            className="font-extrabold text-5xl text-center"
            style={{ fontFamily: "Koh Santepheap" }}
          >
            aniSOS
          </h1>
          <div className="text-center row-span-1 grid grid-rows-2 gap-5 place-self-center w-full relative bottom-9">
            <button className="bg-[#B2CC4F] hover:bg-blue-700 text-black text-xl font-bold rounded-full py-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              Get Started
            </button>
            <button className="bg-[#B2CC4F] hover:bg-blue-700 text-black text-xl font-bold rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              Sign In
            </button>
            <p className="text-lg">
              New? <span className="text-[#367510]">Sign Up</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mb-4"></div>

        <div className="flex justify-center"></div>
      </div>
    </div>
  );
}
