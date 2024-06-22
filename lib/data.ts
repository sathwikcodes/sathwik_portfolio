import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
import web3verse from "@/public/web3verse.png";
import similarity from "@/public/similarity.png"
import flutter from "@/public/flutter.png";
import out from "@/public/outpass.png";
import rmtdevImg from "@/public/rmtdev.png";
import geo from "@/public/geoblocks.jpeg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Intern.",
    location: "Predli.",
    description:
      "Developed and integrated large-scale AI/ML models: Worked with various large language models (LLMs) and implemented advanced algorithms to improve data processing and natural language understanding.",
    icon: React.createElement(FaReact),
    date: "June 2024 - Present",
  },
  {
    title: "Full Stack web developer Intern.",
    location: "Agumentik Solutions Pvt Ltd.",
    description:
      "Worked as an Intern for 2 months and led end-to-end development of a social media web app and configured application networking using AWS services, ensuring reliability through VPC, Route 53 , DNS, and NAT Gateway.",
    icon: React.createElement(FaReact),
    date: "June 2023 - August 2023",
  },
  {
    title: "Board Member and Syndicate, Satoshi.",
    location: "Next Tech Lab , Srm University.",
    description:
      "Provided guidance and mentorship to lab personnel, fostering collaboration and spearheading innovative blockchain projects.",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Web3Verse",
    description:
      "An immersive virtual reality world with blockchian capabilities where you can connect with others from the comfort of your seat. ",
    tags: ["Unity", "Next.js", "Blockchain", "Solidity", "Flutter", "Dart"],
    imageUrl: web3verse,
    link : "https://github.com/sathwikcodes/Web3Verse"
  },
  
    {
    title: "Dynamic flutter",
    description:
      "Flutter Application for browsing and purchasing products online. Firebase for backend services, while Stripe integration facilitates secure payments.",
    tags: ["Flutter", "Dart", "Firebase", "GetX", "Stripe","MVVM"],
      imageUrl: flutter,
    link: "https://github.com/sathwikcodes/Dynamic_Flutter"
  },

            {
    title: "GeoBlocks",
    description:
      "Introducing GeoBlocks, a groundbreaking application that revolutionizes the Web3 experience, turning exploration into an immersive adventure.",
    tags: ["Unity", "Next.js", "Blockchain", "Solidity", "Flutter", "Dart"],
              imageUrl: geo,
    link: "https://github.com/sathwikcodes/geo-blocks"
  },

    {
    title: "Outpass SRM",
    description:
      "This application streamlines the outpass request process for SRM University students.",
    tags: ["Flutter", "Dart", "Firebase", "Twilio","MVVM"],
      imageUrl: out,
    link: "https://github.com/sathwikcodes/Outpass-srm"
  },
    {
    title: "Txt Similarity",
    description:
      "A powerful tool for comparing the similarity between texts and paragraphs.enabling a wide range of applications such as plagiarism detection, content analysis.",
    tags: ["React", "Next.js", "FastAPI", "Tailwind", "Prisma","MongoDB"],
      imageUrl: similarity,
    link: "https://github.com/sathwikcodes/similarity-api"
  },



] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "C++",
  "Data Structures",
  "Algorithms",
  "Flutter",
  "Dart",
  "Artificial Intelligence",
  "Machine Learning",
  "Blockchain",
  "Solidity",
  
] as const;
