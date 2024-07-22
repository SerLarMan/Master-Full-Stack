import "./listElement.scss";
import "../../styles/global.scss";

export function setUpListElement(icon, text, href) {
  const li = document.createElement("li");
  li.classList.add("listElements");

  const a = document.createElement("a");
  a.href = href;

  const i = document.createElement("i");
  i.className = icon;

  const span = document.createElement("span");
  span.textContent = text;

  a.append(i);
  a.append(span);
  li.append(a);
  return li;
}
