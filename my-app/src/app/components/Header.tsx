import Image from "next/image";
import { Raleway, Inter } from "next/font/google";
import { Card, CardHeader } from "@/components/ui/card";
import { SheetButton } from "./SheetButton";
import { Button } from "@/components/ui/button";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: "700",
});

const interFont = Inter({
  subsets: ["latin"],
  weight: "400",
});
export function Header() {
  return (
    <div className="p-2 mt-20">
      <Card className="bg-animated-gradient">
        <CardHeader className="">
          <div className="flex gap-4 items-center justify-center">
            <p className="font-semibold mt-2"> Olá, eu sou</p>
            <h1 className={`text-3xl text-center ${ralewayFont.className}`}>
              Washington Chagas
            </h1>
          </div>
        </CardHeader>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div className="relative w-[300px] h-[300px] mt-6 rounded-full overflow-hidden mx-auto sm:w-[320px] sm:h-[320px] lg:w-[430px] lg:h-[430px]">
          <Image
            src="/foto.jpeg"
            alt="washington-chagas-foto"
            fill
            className="object-cover"
          />
        </div>

        <div className="">
          <p
            className={`p-2 text-zinc-300 text-xl text-justify leading-relaxed ${interFont.className}`}
          >
            Sou formado em Análise e Desenvolvimento de Sistemas e estou no 8°
            semestre de Ciência da Computação. Busco minha primeira oportunidade
            como desenvolvedor fullstack júnior ou estagiário. Tenho
            conhecimentos em tecnologias como JavaScript, TypeScript, React,
            Next.js, Node.js, NestJS, HTML, CSS, Tailwind, Shadcn, PostgreSQL e
            Docker. Ao longo da minha formação, venho desenvolvendo projetos que
            colocam em prática tanto o lado técnico quanto a lógica de resolução
            de problemas. Sou proativo, curioso e tenho muita vontade de
            aprender e evoluir dentro da área. Acredito que com dedicação e
            consistência posso agregar valor a equipe e projetos.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <SheetButton>
          <Button className="p-5 py-6">
            <p className="text-xl p-3">Entre em contato</p>
          </Button>
        </SheetButton>
      </div>
    </div>
  );
}
