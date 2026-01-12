interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Bacharelado em Ciência da Computação",
    institution: "Universidade Nove de Julho (Uninove)",
    period: "2023 - 2025",
  },
  {
    id: 2,
    degree: "Graduado em Análise e Desenvolvimento de Sistemas ",
    institution: "Universidade Nove de Julho (Uninove)",
    period: "2020 - 2022",
  },
  {
    id: 3,
    degree: "Bootcamp Jornada DevOps com AWS",
    institution: "Impulso/DIO",
    period: "69h",
  },
  {
    id: 4,
    degree: "Formação Full-stack",
    institution: "JStack",
    period: "120h",
  },
  {
    id: 5,
    degree: "Formação React Native",
    institution: "JStack",
    period: "40h",
  },
];
