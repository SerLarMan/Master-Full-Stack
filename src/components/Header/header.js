import { setUpIconButton } from "../IconButton/iconButton";

import "./header.scss";
import "../../styles/global.scss";

export function setUpHeader(component) {
  const headerLink = document.createElement("div");
  headerLink.classList.add("headerLink");
  headerLink.id = "home";

  const presentationDiv = document.createElement("div");
  presentationDiv.classList.add("presentationDiv");

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "SERGIO LARA";
  presentationDiv.append(headerTitle);

  const div = document.createElement("div");
  div.classList.add("info");

  const animatedText = document.createElement("span");
  animatedText.textContent = "Front-End";
  animatedText.classList.add("animatedText", "remark");
  div.append(animatedText);

  const cursor = document.createElement("span");
  cursor.textContent = "|";
  cursor.classList.add("cursor", "blink");
  div.append(cursor);

  const developer = document.createElement("span");
  developer.classList.add("remark");
  developer.textContent = " Developer ";
  div.append(developer);
  presentationDiv.append(div);

  const presentation = document.createElement("span");
  presentation.textContent =
    "Passionate about new technologies and digital innovation, with a professional focus on both Front-End and Back-End development. " +
    "Dedicated to creating seamless, user-centric solutions that drive efficiency and enhance user experience.";
  div.append(presentation);
  presentationDiv.append(presentation);

  const socials = document.createElement("div");
  socials.classList.add("socials");
  socials.append(
    setUpIconButton(
      "fa-brands fa-linkedin",
      "https://www.linkedin.com/in/sergio-lara-mantas-a03828179"
    )
  );
  socials.append(
    setUpIconButton("fa-brands fa-github", "https://github.com/SerLarMan")
  );
  presentationDiv.append(socials);

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("imageDiv");

  const userImage = document.createElement("img");
  userImage.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpe0JsQG8BNysOZpXVS8KgifVP7CuN4aWu8w&s";
  imageDiv.append(userImage);

  component.append(headerLink);
  component.append(imageDiv);
  component.append(presentationDiv);
  return component;
}
