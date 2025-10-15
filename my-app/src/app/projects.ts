export interface IProject {
  name: string;
  imageUrl: string;
  description: string;
  link: string;
}

export const projects: IProject[] = [
  {
    name: "Projeto Ecommerce Fullstack — Next.js + Drizzle + NeonDB + Stripe",
    imageUrl: "/eccomerce.png",
    description: `Desenvolvi uma plataforma ecommerce moderna e escalável utilizando Next.js com TypeScript, focada em performance, experiência do usuário e segurança.

O backend é estruturado com Drizzle ORM para acesso eficiente ao banco de dados PostgreSQL hospedado no NeonDB, garantindo alta disponibilidade e escalabilidade.

Na camada frontend, utilizei Tailwind CSS para estilização responsiva e customizável, garantindo um design limpo e funcional em todos os dispositivos.`,

    link: "https://ecommerce-bootcamp-five.vercel.app",
  },
  {
    name: "App Barber",
    imageUrl: "/app-barber.png",
    description: `
        Sistema de Agendamento para Barbearia. Plataforma web desenvolvida com
          Next.js, Tailwind e
          shadcn/ui, voltada para o agendamento de horários em
          barbearias. Utiliza
          Prisma ORM com banco SQL para
          gerenciar usuários, serviços e reservas com autenticação e painel
          responsivo.
    
    `,
    link: "https://app-barber-delta.vercel.app",
  },
  {
    name: "Ficheck",
    imageUrl: "/fincheck2.png",
    description: `
        Sistema completo de controle financeiro desenvolvido com NestJS no back-end e React (Vite) 
        no front-end. Possui autenticação de usuários via JWT e está totalmente hospedado na AWS, garantindo escalabilidade, segurança e alta disponibilidade. Ideal para gerenciamento de finanças pessoais ou empresariais.
    
    `,
    link: "http://my-nest-app-frontend.s3-website-us-east-1.amazonaws.com",
  },

  {
    name: "React Table Project",
    imageUrl: "/react-table.png",
    description: `
        
        Desenvolvimento de tabela dinamica utilizando ReactTable( TanStack),
         com filtros, ordenação, paginação, busca, e soma de valor, 
         foi utilizado vite com Typescript e ShadCn para UI
    
    `,
    link: "https://projeto-react-table.vercel.app",
  },

  {
    name: "Autenticação de Usuarios - JWT",
    imageUrl: "/autenticacao.png",
    description: `
        
        Aplicação web desenvolvida com Next.js, utilizando Tailwind CSS e Shadcn/UI 
        para uma interface moderna e responsiva. O sistema conta com 
        autenticação segura via JWT, garantindo proteção nas rotas e sessões.
        A estrutura de dados é gerenciada com Prisma ORM e PostgreSQL 
como banco de dados principal, 
    
    `,
    link: "https://autentica-o-de-usuarios.vercel.app/login",
  },

  // Adicione mais projetos aqui
];
