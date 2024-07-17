import "./softSkillInfo.scss";
import "../../styles/global.scss";

export function setUpSoftSkillInfo(icon, title, text) {
  const div = document.createElement("div");
  div.classList.add("skillContainer");

  const i = document.createElement("i");
  i.className = icon;

  const skillTitle = document.createElement("p");
  skillTitle.textContent = title;

  const skillText = document.createElement("p");
  skillText.textContent = text;

  div.append(i);
  div.append(skillTitle);
  div.append(skillText);
  return div;
}
