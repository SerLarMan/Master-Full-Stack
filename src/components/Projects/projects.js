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
      "https://media.licdn.com/dms/image/D4E0BAQEv9v_gcp3m3g/company-logo_200_200/0/1683718642523/unimat_prevencion_sl_logo?e=2147483647&v=beta&t=fkLtZg_lGpyv45VekL7BPWeDlI2rFaFt2meSpDaSqeU",
      "Games Hub",
      ["Vite", "SASS"],
      "Project that brings together three classic games to play alone or with someone.",
      "https://www.unimatprevencion.es/"
    )
  );
  projects.append(
    setUpProjectCard(
      "https://media.licdn.com/dms/image/D4E0BAQEv9v_gcp3m3g/company-logo_200_200/0/1683718642523/unimat_prevencion_sl_logo?e=2147483647&v=beta&t=fkLtZg_lGpyv45VekL7BPWeDlI2rFaFt2meSpDaSqeU",
      "Pinterest Clone",
      ["Vite", "SASS", "Unsplash"],
      "Project that simulates the pinterest application, being able to search for images and collections and download any image.",
      "https://www.unimatprevencion.es/"
    )
  );
  projects.append(
    setUpProjectCard(
      "https://hypercritic.org/wp-content/uploads-webpc/uploads/2022/07/ELDENRING_01_4K.jpeg.webp",
      "Elden Ring Wiki Front-End",
      ["React", "Bootstrap", "Axios"],
      "Project that simulates a wik of the Elden Ring video game. Users can mark things achieved as well as obtain information. Data access through an api. User login. Administration panel.",
      "https://github.com/SerLarMan/eldenringwiki-frontend"
    )
  );
  projects.append(
    setUpProjectCard(
      "https://hypercritic.org/wp-content/uploads-webpc/uploads/2022/07/ELDENRING_01_4K.jpeg.webp",
      "Elden Ring Wiki Back-End",
      ["Node Js", "Express Js", "MySql"],
      "API developed for the above project. Access to data in a database. Password encryption. File upload.",
      "https://github.com/SerLarMan/eldenringwiki-backend"
    )
  );

  return projects;
}
