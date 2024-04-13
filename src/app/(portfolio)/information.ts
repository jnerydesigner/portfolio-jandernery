export const Information: InformationType[] = [
  {
    salutation: {
      title: "Olá",
      message: "🖐️",
    },
    personal: {
      title: "Eu sou",
      message: "Jander Nery",
    },
    skill: {
      title: "Eu sou um Desenvolvedor Web que trabalha com tecnologias como:",
      message:
        "NodeJS (NestJS) React, Next.js, Tailwind CSS, Express, MongoDB, Java (Spring Boot) entre outras.",
    },
    titleNavigation: [
      {
        title: "Home",
      },
      {
        title: "Sobre",
      },
      {
        title: "Contato",
      },
      {
        title: "Projetos",
      },
    ],
  },
  {
    salutation: {
      title: "Hello",
      message: "🖐️",
    },
    personal: {
      title: "I am",
      message: "Jander Nery",
    },
    skill: {
      title: "I am a Web developer who works with technologies such as:",
      message:
        "NodeJS (NestJS) React, Next.js, Tailwind CSS, Express, MongoDB, Java (Spring Boot) among others.",
    },
    titleNavigation: [
      {
        title: "Home",
      },
      {
        title: "About",
      },
      {
        title: "Contact",
      },
      {
        title: "Projects",
      },
    ],
  },
];

type SalutationType = {
  title: string;
  message: string;
};

type PersonalType = {
  title: string;
  message: string;
};

type SkillType = {
  title: string;
  message: string;
};

type TitleNavigation = {
  title: string;
};

type InformationType = {
  salutation: SalutationType;
  personal: PersonalType;
  skill: SkillType;
  titleNavigation: TitleNavigation[];
};
