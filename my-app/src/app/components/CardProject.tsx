import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconBrandGithub } from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface IProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

export function CardProject({ project }: IProjectProps) {
  return (
    <>
      <Card
        key={project.id}
        className="bg-slate-900/80 border-slate-800 overflow-hidden group hover:border-violet-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-slate-800/80 text-slate-300 text-xs"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge
                variant="secondary"
                className="bg-slate-800/80 text-slate-300 text-xs"
              >
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-slate-100 group-hover:text-violet-400 transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-slate-400 mb-4 line-clamp-2">
            {project.description}
          </CardDescription>

          <div className="flex gap-3">
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="sm"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                asChild
              >
                <a href={project.liveUrl}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-slate-300 hover:bg-slate-800"
                asChild
              >
                <a href={project.githubUrl}>
                  <IconBrandGithub className="mr-2 h-4 w-4" />
                  Código
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
