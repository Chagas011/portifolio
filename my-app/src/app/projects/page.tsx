import Image from "next/image";
import Nav from "../components/Nav/page";
import TiImage from "../assets/image.jpg";
export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <div className="flex flex-1 items-center justify-center flex-col mt-20">
        <div className="mt-20">
          <h1 className="text-4xl text-green-400 font-serif">Projetos</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-36 p-4 gap-5">
          <div className="flex flex-col items-center gap-2">
            <p className="text-center font-semibold text-lg">
              Lista De Contatos
            </p>

            <div className="relative w-[300px] h-[300px] border rounded-xl overflow-hidden">
              <Image
                src={TiImage}
                alt="ti-Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-row mt-5 gap-5 justify-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
                height={40}
                width={40}
                alt="javascript logo"
                className="rounded-xl hover:scale-125 transition-all"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                height={40}
                width={40}
                alt="javascript logo"
                className="rounded-xl hover:scale-125 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-center font-semibold text-lg">
              Autenticação de usuario JWT
            </p>

            <div className="relative w-[300px] h-[300px] border rounded-xl overflow-hidden">
              <Image
                src={TiImage}
                alt="ti-Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-row mt-5 gap-5 justify-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
                height={40}
                width={40}
                alt="javascript logo"
                className="rounded-xl hover:scale-125 transition-all"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                height={40}
                width={40}
                alt="javascript logo"
                className="rounded-xl hover:scale-125 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-center font-semibold text-lg">Eccomerce</p>

            <div className="relative w-[300px] h-[300px] border rounded-xl overflow-hidden">
              <Image
                src={TiImage}
                alt="ti-Image"
                fill
                className="object-cover"
              />
              <div className="flex flex-row mt-5 gap-5 justify-center">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
                  height={40}
                  width={40}
                  alt="javascript logo"
                  className="rounded-xl hover:scale-125 transition-all"
                />
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  height={40}
                  width={40}
                  alt="javascript logo"
                  className="rounded-xl hover:scale-125 transition-all"
                />
              </div>
            </div>
            <div className="flex flex-row mt-5 gap-5 justify-center">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
                height={40}
                width={40}
                alt="javascript logo"
                className="rounded-xl hover:scale-125 transition-all"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                height={40}
                width={40}
                alt="javascript logo"
                className="rounded-xl hover:scale-125 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
