import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rian Negreiros Dos Santos",
  initials: "RN",
  location: "São João de Meriti, Rio de Janeiro",
  locationLink: "https://www.google.com/maps/place/S%C3%A3o+Jo%C3%A3o+de+Meriti",
  about:
    "Desenvolvedor Back-end",
  summary:
    "Iniciei minha jornada na adolescência, configurando servidores para o jogo DayZ usando Batchfile, XML e JSON. Mas só após terminar o ensino médio, por influência do meu irmão mais velho, que já trabalhava na área, estou embarcando na jornada do desenvolvimento.",
  personalWebsiteUrl: "https://riannegreiros.dev",
  contact: {
    email: "riannegreiros@gmail.com",
    tel: "(21) 97297-8731",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RianNegreiros",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/riannegreiros/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Estácio de Sá",
      degree: "Graduação Tecnológica - Análise e Desenvolvimento de Sistemas",
      start: "2020",
      end: "2023",
    },
  ],
  skills: [
    "C#/ASP.NET Core",
    "Java/Spring",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "DevOps(CI/CD)",
    "Azure",
    "AWS",
    "XP/Scrum",
    "Git",
    "GitHub",
    "SOLID",
    "Arquitetura Limpa"
  ],
  projects: [
    {
      title: "riannegreiros.dev",
      techStack: ["Next.js", "ASP.NET Core", "PostgreSQL", "Redis", "MongoDB"],
      description:
        "Meu site e blog pessoal. Criado com Next.js e ASP.NET Core",
      link: {
        label: "github.com/RianNegreiros/portfolio",
        href: "https://riannegreiros.dev",
      },
    },
    {
      title: "Sistema de rastreamento de veículos",
      techStack: ["ASP.NET Core", "Golang", "Next.js", "Redis", "MongoDB", "Kafka"],
      description:
        "Projeto feito durante a imersão Fullcycle 14, mas usando ASP.NET Core no lugar do NestJS",
      link: {
        label: "https://github.com/RianNegreiros/imersao14-aspnet-core",
        href: ""
      },
    },
    {
      title: "SpotCode",
      techStack: ["Spring", "Oauth2", "H2"],
      description:
        "Uma API de música desenvolvida usando o Spring e Java, inspirada no Spotify",
      link: {
        label: "https://github.com/RianNegreiros/SpotCode",
        href: ""
      },
    },
    {
      title: "EnterpriseStock",
      techStack: ["Spring", "Oauth2", "PostgreSQL"],
      description:
        "API RESTful desenvolvida usando o Spring e Java para catalogação de produtos feito com foco na autorização e autenticação",
      link: {
        label: "https://github.com/RianNegreiros/EnterpriseStock",
        href: ""
      },
    },
    {
      title: "URL Shortener",
      techStack: ["Golang", "Redis", "Fiber"],
      description:
        "Serviço que permite encurtar URLs longos para torná-los mais compactos e fáceis de compartilhar",
      link: {
        label: "https://github.com/RianNegreiros/url-shortener-go-redis",
        href: ""
      },
    },
    {
      title: "Kafka Clone",
      techStack: ["Golang"],
      description:
        "Uma implementação simplificada de um sistema de corretor de mensagens, inspirado no Apache Kafka",
      link: {
        label: "https://github.com/RianNegreiros/devgym-kafka-clone",
        href: ""
      },
    },
    {
      title: "Vigilate",
      techStack: ["Golang", "Next.js", "PostgreSQL", "Apache Kafka"],
      description:
        "Health Checker de serviços Web com monitoramento em tempo real usando Pusher e Apache Kafka",
      link: {
        label: "https://github.com/RianNegreiros/vigilate",
        href: "https://vigilate.vercel.app",
      },
    },
  ],
} as const;
