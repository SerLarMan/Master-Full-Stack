import "./listElement.scss"
import "../../styles/global.scss";

export function setUpListElement(text) {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.href = "";
  a.textContent = text;

  li.append(a);
  return li;
}
