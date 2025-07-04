import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "../projects";
export function CardProjects() {
  return projects.map((project, index) => (
    <Card className="p-2 h-[600px] flex flex-col justify-between" key={index}>
      <CardHeader>
        <CardTitle className="text-center p-3 font-semibold">
          {project.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0 flex-grow">
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill
            className="object-cover"
          />
        </div>
        <CardDescription className="mt-3 px-2 text-sm text-justify line-clamp-4">
          <p>{project.description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="ml-auto">
        <div className="mb-3">
          <Button asChild className="">
            <Link href={project.link} target="_blank">
              Visitar projeto
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  ));
}
