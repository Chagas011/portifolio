import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface IEducationProps {
  edu: {
    id: number;
    degree: string;
    institution: string;
    period: string;
  };
}
export function EducationCard({ edu }: IEducationProps) {
  return (
    <Card
      key={edu.id}
      className="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-all duration-300"
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-slate-100 text-lg">
              {edu.degree}
            </CardTitle>
            <CardDescription className="text-cyan-400 font-medium mt-1">
              {edu.institution}
            </CardDescription>
          </div>
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 shrink-0"
          >
            <Calendar className="mr-1 h-3 w-3" />
            {edu.period}
          </Badge>
        </div>
      </CardHeader>
    </Card>
  );
}
