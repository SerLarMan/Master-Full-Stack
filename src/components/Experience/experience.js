import "./experience.scss";
import "../../styles/global.scss";

export function setUpExperience() {
  const experience = document.createElement("section");

  const sectionTitle = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = "EXPERIENCE";
  h2.id = "experience";

  sectionTitle.append(h2);
  experience.append(sectionTitle);

  return experience;
}
