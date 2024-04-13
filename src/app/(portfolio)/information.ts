const year = new Date().getFullYear();

const messageAboutPT = `Sou apaixonado por Tecnologia e inovação. Meu objetivo é proporcionar
experiências únicas por meio de design e desenvolvimento de alta
qualidade. Quero compartilhar com você a minha jornada e os projetos
no qual participei. Desde a concepção de ideias até a sua realização,
estou compromentido em oferecer soluções que atendam às suas
necessidades e superem suas expectativas. Me sinto na obrigação nos
talentosos designers ao qual sua Empresa me oferecer, passando para o
desenvolvimento e no final o deploy, com dedicaçãoem transformar suas
ideias em realidade. Combino minhas habilidades técnicas com uma
abordagem centrada no cliente para criar resultados que se destacam.
Explore meu portfólio para ver alguns dos meus trabalhos mais recentes
lhe agradam e descubra como podemos ajudar a dar vida às suas ideias.
Estou sempre aberto a novos desafios e adoraria trabalhar com você em
seu próximo projeto criativo. Obrigado por visitar o Portfolio do
Jander Nery. Estou ansioso para colaborar com você e criar algo
incrível juntos! Se você tiver alguma dúvida ou quiser saber mais
sobre meus serviços, entre em contato conosco. Estamos aqui para
ajudar!`;

const messageAboutEN = `I am passionate about Technology and innovation. My goal is to provide
unique experiences through high-end design and development
quality. I want to share my journey and projects with you
in which I participated. From the conception of ideas to their realization,
I am committed to offering solutions that meet your needs
needs and exceed your expectations. I feel obligated to
talented designers that your Company offers me, moving on to the
development and at the end the deployment, with dedication to transforming your
ideas into reality. I combine my technical skills with a
customer-centric approach to create results that stand out.
Explore my portfolio to see some of my latest work
you like and discover how we can help bring your ideas to life.
I am always open to new challenges and would love to work with you on
your next creative project. Thank you for visiting the Portfolio
Jander Nery. I look forward to collaborating with you and creating something
amazing together! If you have any questions or want to know more
about my services, please contact us. We are here for
to help!`;

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
    footer: {
      message: `Todos os direitos reservados para Jander Nery - seligadev.com.br - ${year}`,
    },
    about: {
      title: "Bem-vindo ao portfolio do Jander Nery!",
      message: messageAboutPT,
    },
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
    footer: {
      message: `All rights reserved for Jander Nery - seligadev.com.br - ${year}`,
    },
    about: {
      title: "Welcome to Jander Nery's portfolio!",
      message: messageAboutEN,
    },
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

type FooterType = {
  message: string;
};

type AboutType = {
  title: string;
  message: string;
};

type InformationType = {
  salutation: SalutationType;
  personal: PersonalType;
  skill: SkillType;
  titleNavigation: TitleNavigation[];
  footer: FooterType;
  about: AboutType;
};
