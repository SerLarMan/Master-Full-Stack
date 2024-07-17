import { setUpIconButton } from "../IconButton/iconButton";

import "./footer.scss";
import "../../styles/global.scss";

export function setUpFooter(component) {
  const div = document.createElement("div");

  const span = document.createElement("span");
  span.textContent = "Made by Sergio Lara";
  div.append(span);

  div.append(setUpIconButton("fa-brands fa-linkedin", "https://www.google.es/"));
  div.append(setUpIconButton("fa-brands fa-github", "https://github.com/SerLarMan"));

  component.append(div);
  return component;
}
