import { setUpGameOptionContainer } from "../gameOptionContainer/gameOptionContainer";

import { setUpBuscaminas } from "../buscaminas/buscaminas";

import "./gameContainer.scss";

export function setUpGameContainer(component, name) {
  component.textContent = "";

  const gameContainer = document.createElement("div");

  const goBack = document.createElement("span");
  goBack.textContent = "Volver atrás";
  goBack.classList.add("backButton");
  goBack.addEventListener("click", () => {
    setUpGameOptionContainer(component);
  });
  gameContainer.append(goBack);

  const gameTitle = document.createElement("h2");
  gameTitle.textContent = name;
  gameContainer.append(gameTitle);

  switch (name) {
    case "Come Cocos":
      break;
    case "Busca Minas":
      gameContainer.append(setUpBuscaminas());
      break;
    case "3 en Raya":
  }

  component.append(gameContainer);
  return component;
}
