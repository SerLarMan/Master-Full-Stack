import "../../styles/global.scss";
import "./iconButton.scss";

export function setUpIconButton(icon, clickFunction) {
  const button = document.createElement("button");
  button.className = icon;
  button.classList.add("iconButton");

  button.addEventListener("click", clickFunction);

  return button;
}
