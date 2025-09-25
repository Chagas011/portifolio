import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "../projects";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export function CardProjects() {
  return (
    <div className="mt-16 flex flex-col gap-10" id="projetos">
      <h1
        className={`${bebas.className} text-center text-4xl lg:text-5xl text-white`}
      >
        Projetos
      </h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center rounded-lg shadow-xl transition-transform transform hover:scale-105 overflow-hidden ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Imagem do projeto */}
          <div className="md:w-4/12 w-full h-64 md:min-h-[400px] relative rounded-md overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Descrição e botão */}
          <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.name}
            </h3>
            <p className="text-zinc-300 mb-4">{project.description}</p>
            <Button asChild className="lg:w-[300px] mt-5">
              <Link href={project.link} target="_blank">
                Ver Projeto
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
