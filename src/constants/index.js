import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import dz_logo from "../assets/company/logo.png";
import biks from "../assets/biks.png";
import cloud from "../assets/cloud.png";
import location from "../assets/location.png";
import digital from "../assets/digital.png";
import gitimage from "../assets/gitimage1.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
  },
  {
    title: "Backend Developer",
  },
  {
    title: "AWS Certified",
  },
  {
    title: "AI, ML & LLMs",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "DhruthZuci Tech Solutions",
    icon: dz_logo,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Built web applications using React.js for the frontend and Node.js/Express.js for the backend.",
      "Integrated RESTful APIs and AWS services like EC2, S3, and AWS Workspaces to enhance scalability.",
      "Developed a Clock-In/Clock-Out feature for employee attendance tracking.",
      "Created a Zoho-like Intern Task Management System with features like task creation, assignment, status tracking, and admin dashboards.",
      "Followed Agile practices, attended daily stand-ups, tested and debugged applications for high performance.",
      "Strengthened expertise in full-stack development, cloud technologies, and real-world project management."
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Frontend Project",
    description:
      "ACO – AI Cloud Optimizer is a smart cloud management system built with React, Vite, TailwindCSS, and TypeScript. It features a CRM client panel, intelligent cloud optimization, real-time dashboards, and AI-powered business insights. Ideal for enterprises to enhance productivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cloud,
    source_code_link: "https://github.com/Tousif-Pro/Ai-Cloud-Optimizer",
    live_link: "https://ai-cloud-optimizer.vercel.app/",
  },
  {
    name: "Backend Project",
    description:
      "A high-performance Real-Time Location Tracking Application built with Node.js, Express, and Socket.io, enabling seamless and low-latency communication between clients and server. Perfectly suited for logistics, delivery services, and live ride tracking solutions.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: location ,
    source_code_link: "https://github.com/Tousif-Pro/Realtime-Tracking-App",
    live_link: "https://realtime-tracking-app-f0ah.onrender.com/",
  },
  {
    name: "Ev Bikes",
    description:
      "EV Bikes frontend prototype — a sleek, modern, and fully responsive website showcasing the future of electric bikes! This prototype focuses on a clean, interactive UI designed with the user experience front and center responsive design modern design for Ev bikes ",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image:   biks,
    source_code_link: "https://github.com/Tousif-Pro/EV-Bikes_WebApp",
    live_link: "https://ev-bikes-web-app.vercel.app/",
  },
  {
    name: "Landing Page",
    description:
      "A professional and captivating landing page for Digital Forge, built to showcase innovative digital solutions and services.Designed with a clean layout, responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: digital,
    // source_code_link: "https://aquamarine-crostata-901fda.netlify.app/",
    live_link: "https://aquamarine-crostata-901fda.netlify.app/",
  },
  {
    name: "Git Hub Replica",
    description:
      "A professional and captivating A stunning front-end prototype replicating GitHub's clean interface — responsive, modern, and pixel-perfect.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: gitimage,
    // source_code_link: "https://aquamarine-crostata-901fda.netlify.app/",
    live_link: "https://repo-similarity-hub.lovable.app/",
  },
];

const testimonials = [
  {
    name: "Angel",
    text: "Thank you so much for all your help with the project! I couldn't have done it without you. Your support, ideas, and guidance really helped us a lot, and I've learned a lot from you. You truly made the project awesome!",
  },
  {
    name: "Varsha",
    text: "Agro Fresh Working with this team has been a game-changer for us! Their innovative solutions and dedication to our project have significantly improved our operations. I can't recommend them enough!",
  },
];

export { services, technologies, experiences, projects, testimonials };
