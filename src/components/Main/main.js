import { setUpSkills } from "../Skills/skills";
import { setUpExperience } from "../Experience/experience";
import { setUpProjects } from "../Projects/projects";
import { setUpContact } from "../Contact/contact";

import "./main.scss";
import "../../styles/global.scss";

export function setUpMain(component) {
  component.append(setUpSkills());
  component.append(setUpExperience());
  component.append(setUpProjects());
  component.append(setUpContact());
  return component;
}
