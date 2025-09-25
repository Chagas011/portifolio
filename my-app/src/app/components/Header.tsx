import Image from "next/image";
import { Lato, Bebas_Neue } from "next/font/google";

import { SheetButton } from "./SheetButton";
import { Button } from "@/components/ui/button";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
export function Header() {
  return (
    <div className="p-2 mt-25" id="sobre">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-3">
        <div className="relative w-[320px] h-[320px] mt-6 rounded-3xl overflow-hidden mx-auto sm:w-[320px] sm:h-[420px] lg:w-[350px] lg:h-[500px]">
          <Image
            src="/foto.jpeg"
            alt="washington-chagas-foto"
            fill
            className="object-cover"
          />
        </div>

        <div className="">
          <h1
            className={`${bebas.className} text-center text-4xl lg:text-5xl text-white`}
          >
            Sobre mim
          </h1>
          <p
            className={`p-2 text-zinc-300 text-xl text-justify leading-relaxed ${lato.className}`}
          >
            Sou formado em{" "}
            <strong>Análise e Desenvolvimento de Sistemas</strong> e em{" "}
            <strong>Ciência da Computação</strong>, e busco minha primeira
            oportunidade como <strong>Desenvolvedor Full Stack Júnior</strong>.
            Tenho experiência em{" "}
            <strong>projetos freelancers e acadêmicos</strong> e com{" "}
            <span className="text-indigo-400 font-semibold">JavaScript</span>,{" "}
            <span className="text-indigo-400 font-semibold">TypeScript</span>,{" "}
            <span className="text-indigo-400 font-semibold">React</span>,{" "}
            <span className="text-indigo-400 font-semibold">Next.js</span>,{" "}
            <span className="text-indigo-400 font-semibold">Node.js</span>,{" "}
            <span className="text-indigo-400 font-semibold">NestJS</span>,{" "}
            <span className="text-indigo-400 font-semibold">HTML</span>,{" "}
            <span className="text-indigo-400 font-semibold">CSS</span>,{" "}
            <span className="text-indigo-400 font-semibold">Tailwind</span>,{" "}
            <span className="text-indigo-400 font-semibold">Shadcn</span>,{" "}
            <span className="text-indigo-400 font-semibold">PostgreSQL</span> e{" "}
            <span className="text-indigo-400 font-semibold">Docker</span>, além
            de conhecimentos em{" "}
            <span className="text-purple-400 font-semibold">AWS</span>,{" "}
            <span className="text-purple-400 font-semibold">Kubernetes</span>,{" "}
            <span className="text-purple-400 font-semibold">Linux</span>,{" "}
            <span className="text-purple-400 font-semibold">CI/CD</span> e{" "}
            <span className="text-purple-400 font-semibold">
              Inteligência Artificial (IA)
            </span>
            . Ao longo da minha formação, desenvolvi projetos que combinam
            habilidades técnicas, lógica de programação e resolução de
            problemas, sempre aplicando boas práticas. Sou proativo, curioso e
            dedicado, com grande vontade de aprender e evoluir na área de
            desenvolvimento, contribuindo com valor para equipes e projetos.
          </p>
          <div className="flex justify-center mt-4">
            <SheetButton>
              <Button className="p-5 py-6">
                <p className="text-xl p-3">Entre em contato</p>
              </Button>
            </SheetButton>
          </div>
        </div>
      </div>
    </div>
  );
}
