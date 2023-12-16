"use client";

import Image from "next/image";
import Link from "next/link";
import CameraBox from "@/../public/camera-box.png";
import CameraBg from "@/../public/camera-dog.png";
import InfoCircle from "@/../public/info-circle.png"
import { useRouter } from "next/navigation";

export default function Lens() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-[#DFE3DB] rounded-lg shadow-md p-8 w-full h-screen max-w-md">
        <div className="mb-4 text-black">
          <button
            onClick={() => router.push("/home")}
            className="flex items-center"
          >
            <Image src="/back.svg" alt="Back" width={24} height={24} />
          </button>
        </div>
        <Image src={CameraBg} alt="Camera with a dog in it" />
        <Image
          src={CameraBox}
          alt="Camera scanning area"
          className="absolute"
          style={{ top: "6rem" }}
        />
        <div className="absolute bg-white rounded-lg" style={{ right: 645, bottom: 10, width: "375px", height: "100px" }}>
            <h2 className="text-center">Lorem ipsum</h2>
            <button className="absolute bg-green" style={{ right: 20 }}>
                <Image
                src={InfoCircle}
                alt="Icon for info"
                />
            </button>
        </div>
      </div>
    </div>
  );
}
