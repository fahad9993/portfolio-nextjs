import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaCode, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { AiFillApi, AiOutlineApi } from "react-icons/ai";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiExpress,
  SiJavascript,
  SiLatex,
  SiMongodb,
} from "react-icons/si";
import { SlLayers } from "react-icons/sl";
import { IEducation, IProject, IService, ISkill } from "@/types";
import { BiCodeCurly } from "react-icons/bi";
import { LiaDrawPolygonSolid } from "react-icons/lia";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b>.",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks.",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust REST API using <b>Node API</b>.",
  },
  {
    Icon: FaCode,
    title: "Progamming Languages",
    about:
      "I can work with <b> C </b> and <b>Python</b> and also learning <b>Android App Development</b>.",
  },
  {
    Icon: SiLatex,
    title: "Typesetting",
    about:
      "Work with <b><span className={styles.latex}>L<sup>A</sup>T<sub>E</sub>X</span></b> to create beautifully typesetted documents and can handle complex packages.",
  },
  {
    Icon: SlLayers,
    title: "Design",
    about:
      "Work with <b>AutoCAD</b>, <b>Solidworks</b> and <b>Adobe Illustrator</b> to create engineering designs, logos and many more.",
  },
];

export const languages: ISkill[] = [
  {
    name: "Python",
    level: "50%",
    Icon: FaPython,
  },
  {
    name: "C",
    level: "90%",
    Icon: BiCodeCurly,
  },
  {
    name: "JavaScript",
    level: "80%",
    Icon: SiJavascript,
  },
  {
    name: "React.js",
    level: "80%",
    Icon: FaReact,
  },
  {
    name: "React Native",
    level: "80%",
    Icon: FaReact,
  },
  {
    name: "Node.js",
    level: "60%",
    Icon: FaNodeJs,
  },
  {
    name: "Express.js",
    level: "60%",
    Icon: SiExpress,
  },
  {
    name: "MongoDB",
    level: "80%",
    Icon: SiMongodb,
  },
  {
    name: "API",
    level: "30%",
    Icon: AiFillApi,
  },
  {
    name: "Latex",
    level: "90%",
    Icon: SiLatex,
  },
];

export const tools: ISkill[] = [
  {
    name: "AutoCAD",
    level: "40%",
    Icon: LiaDrawPolygonSolid,
  },
  {
    name: "Solidworks",
    level: "50%",
    Icon: LiaDrawPolygonSolid,
  },
  {
    name: "Adobe Illustrator",
    level: "70%",
    Icon: SiAdobeillustrator,
  },
  {
    name: "Adobe Photoshop",
    level: "50%",
    Icon: SiAdobephotoshop,
  },
];

export const educations: IEducation[] = [
  {
    title: "BSc in Mechanical Engineering",
    place: "Bangladesh University of Engineering and Technology",
    about:
      "With a BSc in Mechanical Engineering, I graduated in 2017 and have since immersed myself in innovative engineering projects. My academic journey includes the development of an automated library system powered by Arduino and precision-engineered robot arms, showcasing my knack for automation and robotics. My thesis delved into advanced material science, where I modified experimental setups to measure the viscoelastic response of superelastic shape memory alloys under complex bending and twisting. Armed with expertise in C, MATLAB, AutoCAD, SolidWorks, and other industry-standard software, I am passionate about driving advancements in automobile and aeronautical engineering, leveraging my technical skills to push the boundaries of what's possible.",
    timeframe: "Sep 2017",
  },
  {
    title: "HSC",
    place: "Dhaka Residential Model College",
    about:
      "I have completed HSC in Science with majors in Higher Mathematics and Biology.",
    timeframe: "Jul 2011",
  },
  {
    title: "SSC",
    place: "Dhaka Residential Model College",
    about:
      "I achieved a remarkable feat by securing a Golden A+ in my SSC exam.",
    timeframe: "Jun 2008",
  },
];

export const experiences: IEducation[] = [
  {
    title: "Admin and Accounts Officer",
    place: "HISP Bangladesh Foundation",
    about:
      "As an Admin and Accounts Officer, I collaborated with teammates to perform assigned tasks, organized and supported team meetings, managed HR operations, kept track of projects, prepared reports, and facilitated teams with innovative ideas.",
    timeframe: "Jan 2022 - May 2022",
  },
  {
    title: "Administrative Assistant",
    place: "World Health Organization (WHO)",
    about:
      "I drafted and finalized technical reports, prepared ad-hoc reports, field visit reports, financial reports, and COVID-19 situation reports. I also provided administrative and secretarial support, drafted SOPs, proofread documents, replied to correspondence, and managed mail, queries, and visitors.",
    timeframe: "Jan 2020 - Oct 2021",
  },
  {
    title: "Administrative Assistant",
    place: "Directorate General of Health Services (DGHS)",
    about:
      "I contributed to the development of guidelines on clinical management for FDMNs, participated in the development of manuals and guidelines, and helped prepare the epidemiological report of the diphtheria outbreak. I also provided administrative and secretarial support to health interventions and support for signing MoU and other documents.",
    timeframe: "Nov 2017 - Nov 2018",
  },
];

export const projects: IProject[] = [
  {
    id: "p01",
    title: "NextJS Portfolio",
    description: "Build on NextJS and other cool features.",
    image_path: "/images/cv_nextjs.webp",
    deployed_url: "https://portfolio-fahad9993.vercel.app/",
    github_url: "https://github.com/fahad9993/portfolio-nextjs",
    category: ["react", "javascript", "express", "mongoDB", "node"],
    key_techs: [
      "Framer Motion",
      "Tailwind CSS",
      "Next.js",
      "Mongoose",
      "MongoDB",
      "Express",
    ],
  },
  {
    id: "p02",
    title: "Personal Porfolio",
    description: "A simple portfolio website for test.",
    image_path: "/images/cv_new.png",
    deployed_url: "https://fahad9993.github.io/cv-new",
    github_url: "https://github.com/fahad9993/cv-new",
    category: ["javascript"],
    key_techs: ["Swiper Js", "Dark Mode", "JavaScript"],
  },
  {
    id: "p03",
    title: "ToDo List",
    description: "A simple webapp for creating todo list.",
    image_path: "/images/todo.png",
    deployed_url: "https://todolist-zmu0.onrender.com/",
    github_url: "https://github.com/fahad9993/todolist",
    category: ["express", "mongoDB", "node", "javascript"],
    key_techs: [
      "EJS",
      "BodyParser",
      "Lodash",
      "Mongoose",
      "MongoDB",
      "Express",
      "Node",
    ],
  },
  {
    id: "p04",
    title: "Basic Portfolio",
    description: "A simple portfolio website with minimal feature.",
    image_path: "/images/cv.png",
    deployed_url: "https://fahad9993.github.io/cv",
    github_url: "https://github.com/fahad9993/cv",
    category: ["html", "css"],
    key_techs: ["Html", "CSS"],
  },
  {
    id: "p05",
    title: "Cash in Hand",
    description: "A simple app for cash calculation.",
    image_path: "/images/expense-tracker-app.png",
    deployed_url: "",
    github_url: "https://github.com/fahad9993/expense-tracker-gsheet",
    category: ["react-native"],
    key_techs: ["React Native"],
  },
  {
    id: "p06",
    title: "Modern Resume",
    description: "A modern responsive downloadable resume built with next.js.",
    image_path: "/images/next-resume.png",
    deployed_url: "https://next-resume-sepia.vercel.app/",
    github_url: "https://github.com/fahad9993/next-resume",
    category: ["react", "node"],
    key_techs: ["Next.js", "Tailwind CSS", "Puppeteer", "Express"],
  },
];
