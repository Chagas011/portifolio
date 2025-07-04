import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";
import { stacks } from "../stacks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Main() {
  return (
    <Card>
      <CardHeader className="text-center font-bold lg:text-2xl">
        Formação Academica - Ensino Superior
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex gap-1 items-center justify-center">
            <h3 className="text-sm font-semibold lg:text-xl text-zinc-300">
              Analise e desenvolvimento de Sistemas - Uninone{" "}
            </h3>
            <Check className="text-green-400" />
          </div>

          <div className="flex gap-1 items-center justify-center">
            <h3 className="text-sm font-semibold lg:text-xl text-zinc-300">
              Ciencia da Computação - Uninone{" "}
            </h3>
            <Check className="text-green-400" />
          </div>

          <div className="mt-5">
            <h3 className="text-center font-bold lg:text-2xl ">
              Formação Academica - Cursos de Tecnologia
            </h3>
            <div className="flex gap-1 items-center justify-center mt-3">
              <h3 className="text-sm font-semibold lg:text-xl text-zinc-300">
                Formação Full-Stack - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>
            <div className="flex gap-1 items-center justify-center mt-3">
              <h3 className="text-sm font-semibold lg:text-xl text-zinc-300">
                Formação NextJs - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>
            <div className="flex gap-1 items-center justify-center mt-3">
              <h3 className="text-sm font-semibold lg:text-xl text-zinc-300">
                Formação React - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>
            <div className="flex gap-1 items-center justify-center mt-3">
              <h3 className="text-sm font-semibold lg:text-xl text-zinc-300">
                Formação JavaScript e TypeScript - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>

            <div className="flex gap-1 items-center justify-center mt-3">
              <h3 className="text-sm font-semibold lg:text-xl text-zinc-300">
                Formação SQL - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>

            <div className="flex gap-1 items-center justify-center mt-3">
              <h3 className="text-sm font-semibold lg:text-xl text-zinc-300">
                JavaScript e TypeScript completo - Udemy{" "}
              </h3>
              <Check className="text-green-400" />
            </div>

            <div className="flex gap-1 items-center justify-center mt-3">
              <h3 className="text-sm font-semibold lg:text-xl text-zinc-300">
                Formação AWS - JStack -{" "}
              </h3>
              <div className="flex items-center gap-2 text-blue-500">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Cursando...</span>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-center font-bold lg:text-2xl ">Tecnologias</h3>
            <div className="grid grid-cols-4 mt-5 gap-4 justify-items-center items-center md:flex md:flex-row md:mt-5 md:gap-5 md:justify-center">
              {stacks.map((url, index) => (
                <div key={index} className="">
                  <Avatar className="w-12 h-12 transition-transform duration-300 hover:scale-110">
                    <AvatarImage
                      src={url}
                      className="rounded-full object-cover transition-transform duration-300 hover:scale-125"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
