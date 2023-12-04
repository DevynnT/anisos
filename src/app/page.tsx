import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-4 items-center justify-center min-h-screen py-2">
        <div className="row-span-1 place-self-center">
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={230}
            height={230}
          />
        </div>
        <h1 className="font-extrabold" style={{ fontFamily: "Koh Santepheap" }}>
          aniSOS
        </h1>
        <div className=" row-span-1 grid grid-rows-2 gap-5 place-self-center">
          <button className="bg-[#B2CC4F] hover:bg-blue-700 text-black text-xl font-bold py-2 px-16 rounded-full drop-shadow-md">
            Get Started
          </button>
          <button className="bg-[#B2CC4F] hover:bg-blue-700 text-black text-xl font-bold py-2 px-16 rounded-full drop-shadow-md">
            Sign In
          </button>
        </div>
        <div>
          <p>New? Sign Up</p>
        </div>
      </div>
    </>
  );
}
