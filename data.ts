import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaCode, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { AiFillApi, AiOutlineApi } from "react-icons/ai";
import {
  SiAdobeillustrator,
  SiExpress,
  SiJavascript,
  SiLatex,
  SiMongodb,
} from "react-icons/si";
import { SlLayers } from "react-icons/sl";
import { IEducation, IService, ISkill } from "@/types";
import { BiCodeCurly } from "react-icons/bi";
import { LiaDrawPolygonSolid } from "react-icons/lia";
import styles from "@/components/styles.module.css";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust REST API using <b>django-rest-api</b> & <b>Node API</b>",
  },
  {
    Icon: FaCode,
    title: "Progamming Languages",
    about:
      "I can work with <b> C </b> and <b>Python</b> as well as learning <b>Android App Development</b>",
  },
  {
    Icon: SiLatex,
    title: "Typesetting",
    about:
      "Work with <b><span className={styles.latex}>L<sup>A</sup>T<sub>E</sub>X</span></b> to create beautifully typesetted documents and can handle complex packages",
  },
  {
    Icon: SlLayers,
    title: "Design",
    about:
      "Work with <b>AutoCAD</b>, <b>Solidworks</b> and <b>Adobe Illustrator</b> to create engineering designs, logos and many more",
  },
];

export const skills: ISkill[] = [
  {
    name: "Python",
    level: "40%",
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
    name: "React",
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
    level: "50%",
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
    level: "20%",
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
];

export const education: IEducation[] = [
  {
    title: "BSc in Mechanical Engineering",
    place: "Bangladesh University of Engineering and Technology",
    about: "I have persued the degree from 2012 to 2017.",
    timeframe: "Sep 2017",
  },
  {
    title: "HSC",
    place: "Dhaka Residential Model College",
    about:
      "I was in the Science group. I have Higher Mathematics and Biology in major.",
    timeframe: "Jul 2011",
  },
  {
    title: "SSC",
    place: "Dhaka Residential Model College",
    about: "It was the first national examination.",
    timeframe: "Jun 2008",
  },
];

export const experience: IEducation[] = [
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
