"use client";
import Nav from "@/app/components/Nav/page";
import { projects } from "@/app/components/Projetos/data";
import { Project } from "@/app/components/Projetos/type";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Descricao() {
  const params = useParams();

  const [projeto, setProjeto] = useState<Project | undefined>();

  useEffect(() => {
    if (params.id) {
      const projeto = projects.find((proj) => proj.id === params.id);
      setProjeto(projeto);
    }
  }, [params]);

  if (!projeto) {
    return (
      <div className="text-center text-white mt-20">
        Carregando ou projeto não encontrado...
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Nav />

      <div className="max-w-lg w-full">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:shadow-xl transition-all duration-300 group">
          {/* Imagem */}
          <Link href={projeto.link}>
            <div className="relative w-full h-40 rounded-xl overflow-hidden">
              <Image
                src={projeto.src}
                alt={projeto.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Conteúdo */}
          <div className="mt-4 space-y-2">
            <h2 className="text-xl font-semibold text-white">{projeto.name}</h2>
            <p className="text-sm text-zinc-400">{projeto.descrição}</p>
            <p className="text-xs text-zinc-500">{projeto.stacks}</p>

            {/* Link */}
            <Link
              href={projeto.link}
              target="_blank"
              className="inline-block mt-3 text-sm text-green-400 hover:underline"
            >
              Ver projeto →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
