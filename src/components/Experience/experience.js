import "./experience.scss";
import "../../styles/global.scss";

export function setUpExperience() {
  const experience = document.createElement("section");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Experience";
  experience.append(sectionTitle);

  return experience;
}
