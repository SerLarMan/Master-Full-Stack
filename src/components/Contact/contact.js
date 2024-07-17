import { setUpFormInput } from "../FormInput/formInput";

import "./contact.scss";
import "../../styles/global.scss";

export function setUpContact() {
  const contact = document.createElement("section");
  contact.classList.add("contact");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Contact";
  sectionTitle.className = "hidden";
  contact.append(sectionTitle);

  // Presentation info part
  const leftSide = document.createElement("article");

  const leftSideTitle = document.createElement("h3");
  leftSideTitle.textContent = "Contact Info";
  leftSideTitle.className = "hidden";
  leftSide.append(leftSideTitle);

  const info = document.createElement("p");
  info.textContent =
    "Contact me with your projects ideas and i will be pleased to discuss them with you";
  leftSide.append(info);

  // Presentation image part
  const rightSide = document.createElement("article");
  rightSide.classList.add("formArticle");

  const rightSideTitle = document.createElement("h3");
  rightSideTitle.textContent = "Contact me";
  rightSide.append(rightSideTitle);

  const contactForm = document.createElement("form");

  contactForm.append(setUpFormInput("fas fa-user", "text", "Name"));
  contactForm.append(setUpFormInput("fas fa-envelope", "email", "Email"));
  contactForm.append(setUpFormInput("fas fa-comment", "text", "Subject"));

  const messageArea = document.createElement("textarea");
  messageArea.placeholder = "Your message";
  contactForm.append(messageArea);

  const button = document.createElement("input");
  button.type = "submit";
  button.value = "Send";
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
  contactForm.append(button);

  rightSide.append(contactForm);

  contact.append(leftSide);
  contact.append(rightSide);
  return contact;
}
