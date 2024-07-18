import { setUpListElement } from "../ListElement/listElement";

import "./nav.scss";
import "../../styles/global.scss";

export function setUpNav(component) {
  const linkList = document.createElement("ul");

  linkList.append(setUpListElement("fas fa-keyboard", "Skills"));
  linkList.append(setUpListElement("fas fa-graduation-cap", "Experience"));
  linkList.append(setUpListElement("fas fa-briefcase", "Projects"));
  linkList.append(setUpListElement("fas fa-paper-plane", "Contact"));

  component.append(linkList);

  return component;
}
