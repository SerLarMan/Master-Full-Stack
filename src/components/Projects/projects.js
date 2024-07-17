import "./projects.scss";
import "../../styles/global.scss";

export function setUpProjects() {
  const projects = document.createElement("section");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Projects";
  projects.append(sectionTitle);

  return projects;
}
