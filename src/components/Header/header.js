import "./header.scss";
import "../../styles/global.scss";

export function setUpHeader(component) {
  const presentationDiv = document.createElement("div");

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "I'm Sergio Lara";
  presentationDiv.append(headerTitle);

  const div = document.createElement("div");

  const animatedText = document.createElement("span");
  animatedText.textContent = "Front-End";
  animatedText.classList.add("animatedText");
  div.append(animatedText);

  const cursor = document.createElement("span");
  cursor.textContent = "|";
  cursor.classList.add("cursor", "blink");
  div.append(cursor);

  const info = document.createElement("span");
  info.textContent = " developer";
  div.append(info);

  presentationDiv.append(div);

  const imageDiv = document.createElement("div");

  const userImage = document.createElement("img");
  userImage.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpe0JsQG8BNysOZpXVS8KgifVP7CuN4aWu8w&s";
  imageDiv.append(userImage);

  component.append(presentationDiv);
  component.append(imageDiv);
  return component;
}
