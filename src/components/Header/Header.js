import { useState } from "react";
import MoonPath from "../../assets/moon.svg";
import SunPath from "../../assets/sun.svg";
const Header = () => {
  const [theme, setTheme] = useState(false);
  return (
    <header className="sticky top-0 left-0 z-30 h-24 w-full border-b-2 bg-white px-64 shadow-md">
      <div className="flex h-full w-full items-center justify-between ">
        <div className="">
          <h1 className="font-Inter text-3xl font-bold text-zinc-900">
            PunPun's
          </h1>
        </div>
        <nav>
          <ul className="flex gap-8  align-text-bottom">
            <li className="text-md cursor-pointer font-Inter font-normal text-zinc-900 duration-150 ease-out hover:text-gray-500">
              About
            </li>
            <li className="text-md cursor-pointer font-Inter font-normal text-zinc-900 duration-150 ease-out hover:text-gray-500">
              Portfolio
            </li>
            <li className="text-md cursor-pointer font-Inter font-normal text-zinc-900 duration-150 ease-out hover:text-gray-500">
              Expirience
            </li>
            <li className="text-md cursor-pointer font-Inter font-normal text-zinc-900 duration-150 ease-out hover:text-gray-500">
              Contact
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <label className="relative block h-8 w-20 " htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              className="hidden"
              onClick={() => setTheme(!theme)}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-3xl border-2 border-zinc-900 bg-white duration-300 ease-out ">
              <div
                className={`absolute bottom-0.5 left-1 z-10 h-6  w-6 rounded-full  bg-zinc-900 duration-300 ${
                  theme && "translate-x-11"
                }`}
              ></div>
              <img
                className={` absolute bottom-0.5 right-1 h-6  w-6 duration-300 ${
                  theme && "-translate-x-11"
                }`}
                src={theme ? SunPath : MoonPath}
              />
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
