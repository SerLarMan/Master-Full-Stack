import { setUpListElement } from "../ListElement/listElement";

import "./nav.scss";
import "../../styles/global.scss";

export function setUpNav(component) {
  const linkList = document.createElement("ul");
  linkList.classList.add("linkList");

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

  const bars = document.createElement("div");
  bars.classList.add("barsContainer");
  bars.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("change");
    linkList.classList.toggle("show");
  });

  const bar1 = document.createElement("div");
  bar1.classList.add("bar1");
  bars.append(bar1);
  const bar2 = document.createElement("div");
  bar2.classList.add("bar2");
  bars.append(bar2);
  const bar3 = document.createElement("div");
  bar3.classList.add("bar3");
  bars.append(bar3);

  component.append(linkList);
  component.append(bars);

  return component;
}
