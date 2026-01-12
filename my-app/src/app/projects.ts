interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    title: "Dashboard Meteorológico",
    description:
      "Sistema completo de monitoramento climático com gráficos interativos, análise de tendências e previsões em tempo real.",
    image: "/weather.png",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "RabbitMQ",
      "Nest",
      "Docker",
    ],
    githubUrl:
      "https://github.com/Chagas011/desafio-gdash-2025-02/tree/washington-chagas-santos",
  },

  {
    id: 2,
    title: "Projeto Ecommerce Fullstack ",
    image: "/eccomerce.png",
    description: `Desenvolvi uma plataforma ecommerce moderna e escalável utilizando Next.js com TypeScript, focada em performance, experiência do usuário e segurança.

O backend é estruturado com Drizzle ORM para acesso eficiente ao banco de dados PostgreSQL hospedado no NeonDB, garantindo alta disponibilidade e escalabilidade.

Na camada frontend, utilizei Tailwind CSS para estilização responsiva e customizável, garantindo um design limpo e funcional em todos os dispositivos.`,
    technologies: [
      "Next",
      "Drizzle",
      "NeonDB",
      "Stripe",
      "React",
      "Tailwind",
      "Typescript",
    ],
    liveUrl: "https://ecommerce-bootcamp-five.vercel.app",
    githubUrl: "https://github.com/Chagas011/Ecommerce-Bootcamp",
  },
  {
    id: 3,
    title: "App Barber",
    image: "/app-barber.png",
    description: `
        Sistema de Agendamento para Barbearia. Plataforma web desenvolvida com
          Next.js, Tailwind e
          shadcn/ui, voltada para o agendamento de horários em
          barbearias. Utiliza
          Prisma ORM com banco SQL para
          gerenciar usuários, serviços e reservas com autenticação e painel
          responsivo.
    
    `,
    technologies: [
      "Next",
      "Prisma",
      "PostgreSQL",
      "React",
      "Tailwind",
      "Typescript",
    ],
    liveUrl: "https://app-barber-delta.vercel.app",
    githubUrl: "https://github.com/Chagas011/AppBarber",
  },
  {
    id: 4,
    title: "Fincheck - Controle financeiro",
    image: "/fincheck2.png",
    description: `
        Sistema completo de controle financeiro desenvolvido com NestJS no back-end e React (Vite) 
        no front-end. Possui autenticação de usuários via JWT e está totalmente hospedado na AWS, garantindo escalabilidade, segurança e alta disponibilidade. Ideal para gerenciamento de finanças pessoais ou empresariais.
    
    `,
    technologies: [
      "React",
      "Tailwind",
      "AWS",
      "Nest",
      "Serverless Framework",
      "Typescript",
    ],
    liveUrl: "http://my-nest-app-frontend.s3-website-us-east-1.amazonaws.com",
    githubUrl: "https://github.com/Chagas011/Fincheck-Front-Vite",
  },

  {
    id: 5,
    title: "React Table Project",
    image: "/react-table.png",
    description: `
        
        Desenvolvimento de tabela dinamica utilizando ReactTable(TanStack),
         com filtros, ordenação, paginação, busca, e soma de valor, 
         foi utilizado vite com Typescript e ShadCn para UI
    
    `,
    technologies: ["React", "Typescript", "Tailwind", "ShadCn"],
    liveUrl: "https://projeto-react-table.vercel.app",
    githubUrl: "https://github.com/Chagas011/Projeto-React-Table",
  },

  {
    id: 6,
    title: "Autenticação de Usuarios - JWT",
    image: "/autenticacao.png",
    description: `
        
        Aplicação web desenvolvida com Next.js, utilizando Tailwind CSS e Shadcn/UI 
        para uma interface moderna e responsiva. O sistema conta com 
        autenticação segura via JWT, garantindo proteção nas rotas e sessões.
        A estrutura de dados é gerenciada com Prisma ORM e PostgreSQL 
como banco de dados principal, 
    
    `,
    technologies: ["Next", "React", "Typescript", "Prisma", "PostgreSQL"],
    liveUrl: "https://autentica-o-de-usuarios.vercel.app/login",
    githubUrl: "https://github.com/Chagas011/Autentica-o-de-Usuarios",
  },
];
