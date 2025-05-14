import Image from "next/image";
import { stacks } from "./stacks";

export default function Main() {
  return (
    <main>
      <div className="bg-zinc-900 mt-14 rounded-xl p-5">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-center text-4xl">Formação academica</h1>
          <div className="grid grid-cols-2 items-center gap-5">
            <div className="flex items-center mt-10">
              <ul className="list-disc list-inside">
                <li className="font-semibold">
                  Graduado em Analise e Desenvolvimento de Sistemas
                </li>
              </ul>
            </div>

            <div className="flex items-center mt-10">
              <ul className="list-disc list-inside">
                <li className="font-semibold">
                  Bacharelado em Ciencia da computação
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h1 className="text-center mt-7 text-4xl font-semibold">Tecnologias</h1>
        <div className="flex flex-row mt-5 gap-5 justify-center">
          {stacks.map((url, index) => (
            <div key={index}>
              <Image
                src={url}
                height={40}
                width={40}
                alt="javascript logo"
                className="rounded-xl hover:scale-125 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
