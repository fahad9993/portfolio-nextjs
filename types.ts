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
