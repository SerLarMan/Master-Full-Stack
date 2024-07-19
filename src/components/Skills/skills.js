import { setUpSoftSkillInfo } from "../SoftSkillInfo/softSkillInfo";
import { setUpTechSkillCard } from "../TechSkillCard/techSkillCard";

import "./skills.scss";
import "../../styles/global.scss";

export function setUpSkills() {
  const skills = document.createElement("section");
  skills.classList.add("skills");

  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("sectionTitle");

  const h2 = document.createElement("h2");
  h2.textContent = "SKILLS";
  h2.id = "skills";

  const line = document.createElement("div");
  line.classList.add("line");

  sectionTitle.append(h2);
  sectionTitle.append(line);
  skills.append(sectionTitle);

  const techSkills = document.createElement("article");

  const techTitle = document.createElement("h3");
  techTitle.textContent = "Technical skills";
  techSkills.append(techTitle);

  const techContainer = document.createElement("div");
  techContainer.classList.add("techContainer");

  techContainer.append(setUpTechSkillCard("fa-brands fa-react", "React"));
  techContainer.append(setUpTechSkillCard("fa-brands fa-angular", "Angular"));
  techContainer.append(setUpTechSkillCard("fa-brands fa-node-js", "Node JS"));
  techContainer.append(setUpTechSkillCard("fa-brands fa-sass", "Sass"));
  techContainer.append(setUpTechSkillCard("icon-spring", "Spring"));
  techContainer.append(setUpTechSkillCard("fa-brands fa-gitlab", "GitLab"));
  techContainer.append(setUpTechSkillCard("fa-brands fa-github", "GitHub"));
  techContainer.append(setUpTechSkillCard("fa-brands fa-docker", "Docker"));
  techContainer.append(setUpTechSkillCard("icon-mysql", "MySQL"));
  techContainer.append(setUpTechSkillCard("icon-mongodb", "MongoDB"));
  techContainer.append(
    setUpTechSkillCard("fa-brands fa-confluence", "Confluence")
  );
  techContainer.append(setUpTechSkillCard("fa-brands fa-jira", "Jira"));

  techSkills.append(techContainer);

  const softSkills = document.createElement("article");

  const softTitle = document.createElement("h3");
  softTitle.textContent = "Soft skills";
  softSkills.append(softTitle);

  const softSkillsInfo = document.createElement("div");
  softSkillsInfo.classList.add("softSkillsContainer");

  softSkillsInfo.append(
    setUpSoftSkillInfo(
      "fas fa-people-group",
      "Team work",
      "Soy muy muy bueno loquete"
    )
  );
  softSkillsInfo.append(
    setUpSoftSkillInfo(
      "fas fa-graduation-cap",
      "Fast learner",
      "Aprendo como un cohete soy un maquinon"
    )
  );
  softSkillsInfo.append(
    setUpSoftSkillInfo(
      "fas fa-gears",
      "Always seeking",
      "Nunca parar de sufrir como persona que viene al mundo"
    )
  );
  softSkills.append(softSkillsInfo);

  skills.append(techSkills);
  skills.append(softSkills);
  return skills;
}
