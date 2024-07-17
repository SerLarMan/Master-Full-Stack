import { setUpSoftSkillInfo } from "../SoftSkillInfo/softSkillInfo";
import { setUpTootlTip } from "../Tooltip/tooltip";

import "./skills.scss";
import "../../styles/global.scss";

export function setUpSkills() {
  const skills = document.createElement("section");
  skills.classList.add("skills");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Skills";
  sectionTitle.classList.add("tooltipContainer");
  sectionTitle.append(setUpTootlTip("Prueba tooltip"));
  skills.append(sectionTitle);

  const techSkills = document.createElement("article");

  const techTitle = document.createElement("h3");
  techTitle.textContent = "Technical skills";
  techSkills.append(techTitle);

  const softSkills = document.createElement("article");

  const softTitle = document.createElement("h3");
  softTitle.textContent = "Soft skills";
  softSkills.append(softTitle);

  const softSkillsInfo = document.createElement("div");
  softSkillsInfo.classList.add("softSkillsInfo");

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
