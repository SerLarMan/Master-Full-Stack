import "./experience.scss";
import "../../styles/global.scss";

export function setUpExperience() {
  const experience = document.createElement("section");
  experience.classList.add("experience");

  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("sectionTitle");

  const h2 = document.createElement("h2");
  h2.textContent = "EXPERIENCE";
  h2.id = "experience";

  const line = document.createElement("div");
  line.classList.add("line");

  sectionTitle.append(h2);
  sectionTitle.append(line);
  experience.append(sectionTitle);

  return experience;
}
