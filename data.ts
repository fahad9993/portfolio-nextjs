import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaCode } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { SiLatex } from "react-icons/si";
import { SlLayers } from "react-icons/sl";
import { IService } from "@/types";
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
