import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { stacks } from "../stacks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bebas_Neue } from "next/font/google";
import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"], weight: ["400", "500"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export function Main() {
  return (
    <Card className="bg-[#010b28] border-0" id="formacao">
      <CardHeader
        className={`${bebas.className} text-center text-2xl lg:text-4xl text-white`}
      >
        Formação Academica - Ensino Superior
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div className="flex gap-1 items-center justify-center">
            <h3
              className={`text-sm font-semibold lg:text-xl text-zinc-300 ${interFont.className}`}
            >
              Analise e desenvolvimento de Sistemas - Uninone{" "}
            </h3>
            <Check className="text-green-400" />
          </div>

          <div className="flex gap-1 items-center justify-center">
            <h3
              className={`text-sm font-semibold lg:text-xl text-zinc-300 ${interFont.className}`}
            >
              Ciencia da Computação - Uninone{" "}
            </h3>
            <Check className="text-green-400" />
          </div>

          <div className="mt-5">
            <h3
              className={`${bebas.className} text-center text-2xl lg:text-4xl text-white`}
            >
              Formação Academica - Cursos de Tecnologia
            </h3>
            <div className="flex gap-1 items-center justify-center mt-3">
              <h3
                className={`text-sm font-semibold lg:text-xl text-zinc-300 ${interFont.className}`}
              >
                Formação Full-Stack - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>
            <div className="flex gap-1 items-center justify-center mt-3">
              <h3
                className={`text-sm font-semibold lg:text-xl text-zinc-300 ${interFont.className}`}
              >
                Formação NextJs - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>
            <div className="flex gap-1 items-center justify-center mt-3">
              <h3
                className={`text-sm font-semibold lg:text-xl text-zinc-300 ${interFont.className}`}
              >
                Formação React - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>
            <div className="flex gap-1 items-center justify-center mt-3">
              <h3
                className={`text-sm font-semibold lg:text-xl text-zinc-300 ${interFont.className}`}
              >
                Formação JavaScript e TypeScript - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>

            <div className="flex gap-1 items-center justify-center mt-3">
              <h3
                className={`text-sm font-semibold lg:text-xl text-zinc-300 ${interFont.className}`}
              >
                Formação SQL - JStack{" "}
              </h3>
              <Check className="text-green-400" />
            </div>

            <div className="flex gap-1 items-center justify-center mt-3">
              <h3
                className={`text-sm font-semibold lg:text-xl text-zinc-300 ${interFont.className}`}
              >
                JavaScript e TypeScript completo - Udemy{" "}
              </h3>
              <Check className="text-green-400" />
            </div>

            <div className="flex gap-1 items-center justify-center mt-3">
              <h3
                className={`text-sm font-semibold lg:text-xl text-zinc-300 ${interFont.className}`}
              >
                Formação AWS - JStack -{" "}
              </h3>
              <div className="flex items-center gap-2 text-blue-500">
                <Check className="text-green-400" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-center font-bold lg:text-2xl ">Tecnologias</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10 justify-items-center items-center mt-10">
              {stacks.map((stack, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Avatar className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 hover:scale-110">
                    <AvatarImage
                      src={stack.icon}
                      alt={stack.name}
                      className="rounded-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p
                    className={`mt-2 text-center text-sm sm:text-base lg:text-lg text-white ${interFont.className}`}
                  >
                    {stack.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
