import "./presentation.scss";
import "../../styles/global.scss";

export function setUpPresentation() {
  const presentation = document.createElement("section");
  presentation.classList.add("presentation");

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Presentation";
  sectionTitle.className = "hidden";
  presentation.append(sectionTitle);

  // Presentation info part
  const leftSide = document.createElement("article");
  leftSide.classList.add("presentationInfo");

  const leftSideTitle = document.createElement("h3");
  leftSideTitle.textContent = "I'm Sergio Lara";
  leftSide.append(leftSideTitle);

  // The div with the animated text
  const div = document.createElement("div");

  const animatedText = document.createElement("span");
  animatedText.textContent = "Frontend";
  animatedText.classList.add("animatedText");
  div.append(animatedText);

  const cursor = document.createElement("span");
  cursor.textContent = "|";
  cursor.classList.add("cursor", "blink");
  div.append(cursor);

  const info = document.createElement("span");
  info.textContent = " developer";
  div.append(info);

  leftSide.append(div);

  // Presentation image part
  const rightSide = document.createElement("article");

  const rightSideTitle = document.createElement("h3");
  rightSideTitle.textContent = "User Image";
  rightSideTitle.className = "hidden";
  rightSide.append(rightSideTitle);

  const userImage = document.createElement("img");
  userImage.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpe0JsQG8BNysOZpXVS8KgifVP7CuN4aWu8w&s";
  rightSide.append(userImage);

  presentation.append(leftSide);
  presentation.append(rightSide);
  return presentation;
}
