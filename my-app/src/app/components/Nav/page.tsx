"use client";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "../../assets/menu (1).svg";
import Image from "next/image";
export default function Nav() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-20 w-full items-center px-4 bg-zinc-900 rounded-xl">
      <div className="flex flex-col">
        <span className="hover:scale-105 transition-all">
          <Link
            href="/"
            className="text-2xl font-extrabold text-green-400  p-4"
          >
            Washington Chagas Santos
          </Link>
        </span>
        <span className="flex justify-center">FullStack Junior</span>
      </div>

      <button
        onClick={handleToggle}
        className="ml-auto pr-5 md:hidden cursor-pointer"
      >
        <Image
          src={MenuIcon}
          alt="menuIcon"
          width={35}
          height={35}
          className="dark:invert hover:scale-110"
        />
      </button>

      {toggle && (
        <div className="absolute right-4 top-[60px] w-44 divide-y divide-gray-100 rounded-lg justify-center text-center bg-green-950">
          <ul className="py-2 text-sm text-white">
            <li className="p-2">
              <Link
                href="/"
                className="text-white text-xl hover:text-green-400 p-3"
              >
                Home
              </Link>
            </li>

            <li className="p-2">
              <Link
                href="/projects"
                className="text-white text-xl hover:text-green-400"
              >
                Projetos
              </Link>
            </li>

            <li className="p-2">
              <Link
                href="/contact"
                className="text-white text-xl hover:text-green-400"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}

      <ul className="ml-auto flex flex-row gap-4 py-2 max-md:hidden">
        <li>
          <Link href="/" className="text-white text-xl hover:text-green-400">
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/projects"
            className="text-white text-xl hover:text-green-400"
          >
            Projetos
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="text-white text-xl hover:text-green-400"
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
