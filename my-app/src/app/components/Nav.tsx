import { Card, CardContent } from "@/components/ui/card";
import { SheetButton } from "./SheetButton";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <Card className="border-none">
      <CardContent className="flex justify-between items-center">
        <Link href="/">
          <Image alt="logo" src="/logo.svg" height={50} width={200} />
        </Link>
        <SheetButton>
          <Button variant="default">
            <MenuIcon />
          </Button>
        </SheetButton>
      </CardContent>
    </Card>
  );
}
