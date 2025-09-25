import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import { SheetButton } from "./SheetButton";

import { Lato } from "next/font/google";
import Link from "next/link";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "300",
});

export function Nav() {
  return (
    <header className="h-25 px-5 flex justify-between items-center bg-[#191f52] fixed top-0 inset-x-0 z-50">
      <Link href="#sobre">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-start leading-tight">
            <h1
              className={`${bebas.className} text-3xl lg:text-5xl tracking-wide text-white`}
            >
              Washington <span className="text-indigo-400">Chagas</span>
            </h1>
            <p
              className={`${lato.className} text-sm sm:text-base text-gray-300 text-center`}
            >
              <span className=" text-white">Desenvolvedor Full Stack Jr</span>
            </p>
          </div>
        </div>
      </Link>

      <nav className="hidden lg:flex gap-4">
        <SheetButton>
          <Button className="">Contato</Button>
        </SheetButton>
        <Button asChild>
          <Link href="#projetos">Projetos</Link>
        </Button>
        <Button asChild>
          <Link href="#formacao">Formação Academica</Link>
        </Button>
      </nav>

      <div className="lg:hidden">
        <SheetButton>
          <Button variant={"outline"} aria-label="Abrir menu">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetButton>
      </div>
    </header>
  );
}
