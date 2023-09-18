import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}
export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface NavItemProps {
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}

export interface IEducation {
  title: string;
  place: string;
  about: string;
  timeframe: string;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export interface Message {
  _id: string;
  fullname: string;
  email: string;
  message: string;
  date: string;
}

export type Category =
  | "javascript"
  | "react"
  | "mongoDB"
  | "node"
  | "express"
  | "html"
  | "css";

export type Severity = "error" | "warning" | "info" | "success";
