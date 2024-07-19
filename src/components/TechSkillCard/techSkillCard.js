import "./techSkillCard.scss";
import "../../styles/global.scss";

export function setUpTechSkillCard(icon, text) {
  const div = document.createElement("div");
  div.classList.add("techCard");

  const i = document.createElement("i");
  i.className = icon;

  const span = document.createElement("span");
  span.textContent = text;

  div.append(i);
  div.append(span);
  return div;
}
