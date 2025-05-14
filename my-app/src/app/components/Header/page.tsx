import Link from "next/link";
import TiImage from "../../assets/image.jpg";
import Image from "next/image";
export default function Header() {
  return (
    <div className="p-2 mt-20">
      <div className="grid grid-cols-2">
        <div>
          <h5>Ola, Eu sou</h5>
          <h1 className="text-4xl text-green-300">Washington Chagas</h1>
          <p className="p-2 text-sm">Desenvolvedor FullStack Junior</p>

          <p className="p-2 text-zinc-300 text-xl font-serif">
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

        <div className="flex justify-center items-center">
          <div>
            <Image
              src={TiImage}
              alt="ti-Image"
              width={400}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link
          href="/contact"
          className=" bg-green-800 text-white hover:bg-green-600 active:bg-green-900 p-4 rounded-2xl "
        >
          Entre em contato
        </Link>
      </div>
    </div>
  );
}
