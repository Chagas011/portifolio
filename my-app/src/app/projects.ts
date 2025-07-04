export interface IProject {
  name: string;
  imageUrl: string;
  description: string;
  link: string;
}

export const projects: IProject[] = [
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
