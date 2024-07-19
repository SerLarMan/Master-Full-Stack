import { setUpListElement } from "../ListElement/listElement";

import "./nav.scss";
import "../../styles/global.scss";

export function setUpNav(component) {
  const linkList = document.createElement("ul");

  linkList.append(setUpListElement("fas fa-house", "Home", "#home"));
  linkList.append(setUpListElement("fas fa-keyboard", "Skills", "#skills"));
  linkList.append(
    setUpListElement("fas fa-graduation-cap", "Experience", "#experience")
  );
  linkList.append(
    setUpListElement("fas fa-briefcase", "Projects", "#projects")
  );
  linkList.append(
    setUpListElement("fas fa-paper-plane", "Contact", "#contact")
  );

  component.append(linkList);

  return component;
}
