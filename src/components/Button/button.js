import "./button.scss";
import "../../styles/global.scss";

export function setUpButton(text, icon, clickEvent) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = text;

  if (icon) {
    const i = document.createElement("i");
    i.className = icon;
    button.append(i);
  }

  button.addEventListener("click", clickEvent);

  return button;
}
