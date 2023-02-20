import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 py-6 max-w-6xl sm:mx-auto">
      <div className="logo ml-2">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold py-1 px-2 mr-1 rounded-lg bg-sky-600 text-white">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
      <div className="nav flex">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsInfoCircleFill} />
      </div>
    </header>
  );
}

export default Header;
