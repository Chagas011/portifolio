import Link from "next/link";
import Image from "next/image";
import { Raleway, Inter, Rubik } from "next/font/google";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: "700",
});

const rubikFont = Rubik({
  subsets: ["latin"],
  weight: "600",
});

const interFont = Inter({
  subsets: ["latin"],
  weight: "400",
});
export default function Header() {
  return (
    <div className="p-2 mt-20">
      <div className="gradient-animated border border-green-800 rounded-2xl p-4 text-white">
        <h5>Ola, Eu sou</h5>
        <h1 className={`text-3xl text-center ${ralewayFont.className}`}>
          Washington Chagas
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex justify-center items-center mt-5">
          <div>
            <Image
              src="/assets/eu.png"
              alt="ti-Image"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="">
          <p
            className={`p-2 text-zinc-300 text-xl text-justify leading-relaxed ${interFont.className}`}
          >
            Sou formado em Análise e Desenvolvimento de Sistemas e estou no 8°
            semestre de Ciência da Computação. Busco minha primeira oportunidade
            como desenvolvedor fullstack júnior ou estagiário. Tenho
            conhecimentos em tecnologias como JavaScript, TypeScript, React,
            Next.js, Node.js, NestJS, HTML, CSS, Tailwind, PostgreSQL e Docker.
            Ao longo da minha formação, venho desenvolvendo projetos que colocam
            em prática tanto o lado técnico quanto a lógica de resolução de
            problemas. Sou proativo, curioso e tenho muita vontade de aprender e
            evoluir dentro da área. Acredito que com dedicação e consistência
            posso agregar valor a equipe e projetos.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href="/contact"
          className={`${rubikFont.className} bg-green-600 text-white hover:bg-zinc-800 hover:text-green-600 active:bg-green-900 p-4 rounded-2xl transition-all ease-in-out duration-300 text-center w-[300px]`}
        >
          Entre em contato
        </Link>
      </div>
    </div>
  );
}
