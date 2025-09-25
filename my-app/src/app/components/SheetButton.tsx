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

import { CardContact } from "./CardContact";

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
