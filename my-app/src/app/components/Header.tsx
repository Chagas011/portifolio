import { Button } from "@/components/ui/button";
import { IconBrandGithub } from "@tabler/icons-react";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-slate-950 to-cyan-600/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/30 via-transparent to-transparent" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 p-1">
              <Image
                src="/foto.jpeg"
                alt="João Silva"
                className="w-full h-full rounded-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Washington Chagas
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-6">
            Desenvolvedor Full Stack
          </p>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack com foco em aplicações performáticas e
            escaláveis, utilizando React, Next.js, React Native, TypeScript,
            Node.js e AWS.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-violet-500/50 text-violet-400 hover:bg-violet-500/10 hover:border-violet-400"
            >
              <Link
                href="https://github.com/Chagas011"
                className="flex"
                target="_blank"
              >
                <IconBrandGithub className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0"
            >
              <Link href="#contact" className="flex">
                <Mail className="mr-2 h-5 w-5" />
                Contato
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
