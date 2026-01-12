import { Card, CardContent } from "@/components/ui/card";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Mail, MapPin, Phone } from "lucide-react";

interface IContactCardProps {
  contactInfo: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
}
export function ContactCard({ contactInfo }: IContactCardProps) {
  return (
    <Card
      className="bg-gradient-to-br from-slate-900 to-slate-900/50 border-slate-800"
      id="contact"
    >
      <CardContent className="p-8">
        <div className="flex flex-col gap-6">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-violet-500/20 text-violet-400 group-hover:bg-violet-500/30 transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                Email
              </p>
              <p className="text-slate-300 text-sm">{contactInfo.email}</p>
            </div>
          </a>

          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                Telefone
              </p>
              <p className="text-slate-300 text-sm">{contactInfo.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50">
            <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                Localização
              </p>
              <p className="text-slate-300 text-sm">{contactInfo.location}</p>
            </div>
          </div>

          <a
            href={`https://${contactInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group"
          >
            <div className="p-3 rounded-lg bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30 transition-colors">
              <IconBrandGithub className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                GitHub
              </p>
              <p className="text-slate-300 text-sm">{contactInfo.github}</p>
            </div>
          </a>

          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors group md:col-span-2 md:max-w-[100%] "
          >
            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
              <IconBrandLinkedin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">
                LinkedIn
              </p>
              <p className="text-slate-300 text-sm">{contactInfo.linkedin}</p>
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
