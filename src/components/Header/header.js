import { setUpListElement } from "../ListElement/listElement";

import "./header.scss";
import "../../styles/global.scss";

export function setUpHeader(component) {
  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Sergio Lara";
  headerTitle.classList.add("hidden");
  component.append(headerTitle);

  const linkList = document.createElement("ul");

  linkList.append(setUpListElement("Skills"));
  linkList.append(setUpListElement("Experience"));
  linkList.append(setUpListElement("Projects"));
  linkList.append(setUpListElement("Contact"));

  component.append(linkList);

  return component;
}
