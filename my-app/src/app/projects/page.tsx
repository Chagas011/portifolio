import Nav from "../components/Nav/page";

import { Space_Grotesk } from "next/font/google";
import { projects } from "../components/Projetos/data";
import Link from "next/link";
import Image from "next/image";

const spaceFont = Space_Grotesk({
  subsets: ["latin"],
  weight: "700",
});
export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <div className="flex flex-1 items-center justify-center flex-col mt-20">
        <div className="mt-20">
          <h1 className={`text-4xl text-green-400 ${spaceFont.className}`}>
            Projetos
          </h1>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-28 p-4 gap-5">
            {projects.map((project) => (
              <Link href={`descricao/${project.id}`} key={project.id}>
                <div
                  className="flex flex-col items-center gap-2"
                  key={project.id}
                >
                  <p className="text-center font-semibold text-lg">
                    {project.name}
                  </p>

                  <div className="relative w-[300px] h-[300px] border rounded-xl overflow-hidden hover:scale-105 transition-all ease-in-out duration-300">
                    <Image
                      src={project.src}
                      alt="ti-Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
