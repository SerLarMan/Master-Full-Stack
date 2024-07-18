import "./listElement.scss";
import "../../styles/global.scss";

export function setUpListElement(icon, text) {
  const li = document.createElement("li");
  const div = document.createElement("div");

  const i = document.createElement("i");
  i.className = icon;

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("hidden");

  div.append(i);
  div.append(span);
  li.append(div);
  return li;
}
