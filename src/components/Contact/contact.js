import { setUpFormInput } from "../FormInput/formInput";
import { setUpButton } from "../Button/button";

import "./contact.scss";
import "../../styles/global.scss";

export function setUpContact() {
  const contact = document.createElement("section");
  contact.classList.add("contact");

  const sectionTitle = document.createElement("div");
  sectionTitle.classList.add("sectionTitle");

  const h2 = document.createElement("h2");
  h2.textContent = "CONTACT";
  h2.id = "contact";

  const line = document.createElement("div");
  line.classList.add("line");

  sectionTitle.append(h2);
  sectionTitle.append(line);
  contact.append(sectionTitle);

  const article = document.createElement("article");

  const contactForm = document.createElement("form");

  contactForm.append(setUpFormInput("fas fa-user", "text", "Name"));

  const email = setUpFormInput("fas fa-envelope", "email", "Email");
  email.pattern = "\^[w-.]+@([w-]+.)+[w-]{2,4}$";
  contactForm.append(email);

  contactForm.append(setUpFormInput("fas fa-comment", "text", "Subject"));

  const messageArea = document.createElement("textarea");
  messageArea.placeholder = "Your message";
  messageArea.rows = "12";
  messageArea.required = true;
  contactForm.append(messageArea);

  const button = setUpButton("Send", "fas fa-paper-plane", (e) => {});
  button.type = "submit";
  contactForm.append(button);
  article.append(contactForm);

  contact.append(article);

  return contact;
}
