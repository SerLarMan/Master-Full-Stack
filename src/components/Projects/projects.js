import { setUpProjectCard } from "../ProjectCard/projectCard";

import "./projects.scss";
import "../../styles/global.scss";

export function setUpProjects() {
  const projects = document.createElement("section");

  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("sectionTitle");

  const h2 = document.createElement("h2");
  h2.textContent = "PROJECTS";
  h2.id = "projects";

  const line = document.createElement("div");
  line.classList.add("line");

  sectionTitle.append(h2);
  sectionTitle.append(line);
  projects.append(sectionTitle);

  projects.append(
    setUpProjectCard(
      //"https://media.licdn.com/dms/image/D4E0BAQEv9v_gcp3m3g/company-logo_200_200/0/1683718642523/unimat_prevencion_sl_logo?e=2147483647&v=beta&t=fkLtZg_lGpyv45VekL7BPWeDlI2rFaFt2meSpDaSqeU",
      "",
      "Games Hub",
      [
        "Vite",
        "SASS"
      ],
      "Project that brings together three classic games to play alone or with someone.",
      "https://www.unimatprevencion.es/"
    )
  );

  return projects;
}
