import { setUpButton } from "../Button/button";

import "./companyCard.scss";
import "../../styles/global.scss";

export function setUpCompanycard(image, name, position, tasks, web) {
  const company = document.createElement("article");
  company.classList.add("companyCard");

  const companyImage = document.createElement("div");
  companyImage.classList.add("companyImage");

  const img = document.createElement("img");
  img.src = image;
  companyImage.append(img);

  const companyInfo = document.createElement("div");
  companyInfo.classList.add("companyInfo");

  const companyTitle = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = name;
  companyTitle.append(h3);

  const p = document.createElement("p");
  p.textContent = position;
  p.classList.add("remark");
  companyTitle.append(p);

  const ul = document.createElement("ul");
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    ul.append(li);
  });
  companyTitle.append(ul);
  companyInfo.append(companyTitle);

  companyInfo.append(
    setUpButton(
      "Check the website",
      "fas fa-arrow-up-right-from-square",
      () => {
        window.open(web, "_blank");
      }
    )
  );

  company.append(companyImage);
  company.append(companyInfo);
  return company;
}
