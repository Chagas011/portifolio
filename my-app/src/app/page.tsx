import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Mail } from "lucide-react";

import { CardProject } from "./components/CardProject";
import { ContactCard } from "./components/ContactCard";
import { EducationCard } from "./components/EducationCard";
import { Header } from "./components/Header";
import { education } from "./education";
import { projects } from "./projects";
const contactInfo = {
  email: "washington.chagas.9@hotmail.com",
  phone: "+55 (11) 98500-1474",
  location: "São Paulo, Brasil",
  github: "github.com/Chagas011",
  linkedin: "www.linkedin.com/in/washington-chagas/",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <Header />

      {/* Projects Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-violet-500/50 text-violet-400"
            >
              <Briefcase className="mr-2 h-3 w-3" />
              Portfólio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Projetos em Destaque
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project) => (
              <CardProject project={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-cyan-500/50 text-cyan-400"
            >
              <GraduationCap className="mr-2 h-3 w-3" />
              Formação
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Formação Acadêmica
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto">
              Minha trajetória educacional e especializações
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <EducationCard key={index} edu={edu} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-violet-500/50 text-violet-400"
            >
              <Mail className="mr-2 h-3 w-3" />
              Contato
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Vamos Conversar?
            </h2>
            <p className="text-slate-400 mt-2 max-w-xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes
            </p>
          </div>

          <div className="max-w-2xl mx-auto ">
            <ContactCard contactInfo={contactInfo} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Washington Chagas. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
