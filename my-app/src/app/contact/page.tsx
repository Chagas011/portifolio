import Link from "next/link";
import Nav from "../components/Nav/page";
import {
  IconBrandWhatsapp,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Washington Chagas Santos | Contato",
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <div className="flex flex-1 items-center justify-center flex-col">
        <div>
          <h1 className="text-2xl text-green-400 p-10">Entre em contato</h1>
        </div>
        <div className="grid grid-cols-1 md:flex md:flex-row gap-2 md:gap-5 px-10 justify-items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <Link
              href="https://wa.me/5511985001474"
              target="_blank"
              className="flex flex-row gap-1"
            >
              <IconBrandWhatsapp className="text-green-500" />
              <span>(11) 98500-1474</span>
            </Link>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <IconMail className="text-yellow-200" />
            <span>washington.chagas.9@hotmail.com</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Link
              href="https://github.com/Chagas011"
              target="_blank"
              className="flex flex-row gap-1"
            >
              <IconBrandGithub />
              <span>GitHub</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/washington-chagas"
              target="_blank"
              className="flex flex-row gap-1"
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
