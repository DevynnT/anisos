import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="absolute bottom-0 left-0 w-full bg-[#C9C5C1] shadow-md">
      <ul className="flex justify-between p-4 mx-1">
        <li className="hover:bg-[#E3DBDE] rounded-full w-16 h-16 flex items-center justify-center">
          <Link
            href="/home"
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center">
              <img src="/home.svg" alt="Home" className="w-10 h-10" />
            </div>
            <span>Home</span>
          </Link>
        </li>
        <li className="hover:bg-[#E3DBDE] rounded-full w-16 h-16 flex items-center justify-center">
          <Link
            href="/animalList"
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center">
              <img src="/paw.svg" alt="Animals" className="w-10 h-10" />
            </div>
            <span>Animals</span>
          </Link>
        </li>
        <li className="hover:bg-[#E3DBDE] rounded-full w-16 h-16 flex items-center justify-center">
          <Link
            href="/lens"
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center">
              <img src="/camera.svg" alt="Lens" className="w-10 h-10" />
            </div>
            <span>Lens</span>
          </Link>
        </li>
        <li className="hover:bg-[#E3DBDE] rounded-full w-16 h-16 flex items-center justify-center">
          <Link
            href="/locations"
            className="flex flex-col items-center justify-center"
          >
            <div className="flex items-center justify-center">
              <img src="/map.svg" alt="Locations" className="w-10 h-10" />
            </div>
            <span>Locations</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
