import Link from "next/link";
import { EmailContact } from "./EmailContact";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
export function CardContact() {
  return (
    <Card className="mt-30">
      <CardContent className="">
        <div className="space-y-5">
          <div className="items-center flex gap-2">
            <p className="">
              <IconBrandWhatsapp className="text-green-500 mt-1" />
            </p>
            <Link
              href={`https://wa.me/5511985001474`}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-green-600"
            >
              (11) 98500-1474
            </Link>
          </div>
          <div className="items-center flex gap-2">
            <EmailContact />
          </div>

          <div className="items-center flex gap-2">
            <p className="">
              <IconBrandLinkedin className="text-blue-400 mt-1" />
            </p>
            <Link
              href="https://www.linkedin.com/in/washington-chagas/"
              className="hover:text-blue-500 transition"
              target="_blank"
            >
              Washington Chagas
            </Link>
          </div>

          <div className="items-center flex gap-2">
            <p className="">
              <IconBrandGithub className=" mt-1" />
            </p>
            <Link
              href="https://github.com/Chagas011"
              className="hover:text-zinc-500 transition"
              target="_blank"
            >
              Washington Chagas - Chagas011
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
