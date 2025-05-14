import Link from "next/link";
import Nav from "../components/Nav/page";
import {
  IconBrandWhatsapp,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <div className="flex flex-1 items-center justify-center flex-col">
        <div>
          <h1 className="text-2xl text-green-400 p-10">Entre em contato</h1>
        </div>
        <div className="grid grid-cols-2 md:flex md:flex-row gap-5">
          <div className="flex items-center gap-2 cursor-pointer">
            <Link
              href="https://wa.me/5511985001474"
              target="_blank"
              className="flex flex-row gap-2"
            >
              <IconBrandWhatsapp className="text-green-500" />
              <span>(11) 98500-1474</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <IconMail className="text-yellow-200" />
            <span>washington.chagas.9@hotmail.com</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <IconBrandGithub />
            <span>GitHub</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/washington-chagas"
              target="_blank"
              className="flex flex-row gap-2"
            >
              <IconBrandLinkedin className="text-blue-500" />
              <span>Linkedin</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
