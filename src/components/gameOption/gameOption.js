import { setUpGameContainer } from "../gameContainer/gameContainer";

import "./gameOption.scss";

export function setUpGameOption(image, name) {
  const container = document.createElement("div");
  container.addEventListener("click", () => {
    const main = document.querySelector("main");
    setUpGameContainer(main, name);
  });
  container.classList.add("gameOptionContainer");

  const gameImage = document.createElement("img");
  gameImage.src = image;

  const gameName = document.createElement("span");
  gameName.textContent = name;

  container.append(gameImage);
  container.append(gameName);
  return container;
}
