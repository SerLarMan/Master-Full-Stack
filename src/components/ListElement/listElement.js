import "./listElement.scss";
import "../../styles/global.scss";

export function setUpListElement(icon, text, href) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = href;

  const i = document.createElement("i");
  i.className = icon;

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("hidden");

  a.append(i);
  a.append(span);
  li.append(a);
  return li;
}
