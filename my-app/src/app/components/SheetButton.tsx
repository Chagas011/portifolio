import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { FolderKanbanIcon, HomeIcon } from "lucide-react";
import { CardContact } from "./CardContact";
import Link from "next/link";
import { ReactNode } from "react";

interface SheetButtonProps {
  children: ReactNode;
}

export function SheetButton({ children }: SheetButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="px-3">
        <SheetHeader className="mt-3 py-5">
          <SheetTitle>Entre em contato</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-3">
          <SheetClose asChild>
            <Button variant="secondary" className="w-full" asChild>
              <Link href="/">
                <HomeIcon />
                <p className="text-md font-bold">Pagina Inicial</p>
              </Link>
            </Button>
          </SheetClose>
          <Button variant="default" className="w-full" asChild>
            <Link href="/projects">
              <FolderKanbanIcon />
              <p className="text-md font-bold">Projetos</p>
            </Link>
          </Button>
        </div>
        <CardContact />
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
