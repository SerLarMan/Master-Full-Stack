import { setUpGameOptionContainer } from "../gameOptionContainer/gameOptionContainer";
import { setUpBuscaminas } from "../buscaminas/buscaminas";
import { setUpTresraya } from "../tresraya/tresraya";
import { setUpWordle } from "../wordle/wordle";

import "./gameContainer.scss";

export function setUpGameContainer(component, name) {
  component.textContent = "";

  const titleSection = document.createElement("section");
  titleSection.classList.add("titleSection");

  const goBack = document.createElement("span");
  goBack.textContent = "Volver atrás";
  goBack.classList.add("backButton");
  goBack.addEventListener("click", () => {
    setUpGameOptionContainer(component);
  });
  titleSection.append(goBack);

  const gameTitle = document.createElement("h2");
  gameTitle.textContent = name;
  titleSection.append(gameTitle);

  const gameSection = document.createElement("section");

  switch (name) {
    case "Wordle":
      gameSection.append(setUpWordle());
      break;
    case "Busca Minas":
      gameSection.append(setUpBuscaminas(8, 8, 10));
      break;
    case "3 en Raya":
      gameSection.append(setUpTresraya(10, 10));
  }

  //component.append(titleSection);
  component.append(gameSection);
  return component;
}
