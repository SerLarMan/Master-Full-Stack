import { setUpButton } from "../Button/button";

import "./projectCard.scss";
import "../../styles/global.scss";

export function setUpProjectCard(image, name, stack, description, web) {
  const project = document.createElement("article");
  project.classList.add("projectCard");

  const projectImage = document.createElement("div");
  projectImage.classList.add("projectImage")

  const img = document.createElement("img");
  img.src = image;
  projectImage.append(img);

  const projectInfo = document.createElement("div");
  projectInfo.classList.add("projectInfo");

  const projectTitle = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = name;
  projectTitle.append(h3);

  const ul = document.createElement("ul");
  stack.forEach((s) => {
    const li = document.createElement("li");
    li.textContent = s;
    li.classList.add("remark");

    if (stack.at(-1) !== s) {
      li.textContent = li.textContent + ", ";
    }

    ul.append(li);
  });
  projectTitle.append(ul);
  
  const p = document.createElement("p");
  p.textContent = description;
  projectTitle.append(p);
  projectInfo.append(projectTitle);

  projectInfo.append(
    setUpButton(
      "Check the project",
      "fas fa-arrow-up-right-from-square",
      () => {
        window.open(web, "_blank");
      }
    )
  );

  project.append(projectImage);
  project.append(projectInfo);
  return project;
}
