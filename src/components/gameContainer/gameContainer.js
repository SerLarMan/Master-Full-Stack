import { setUpGameOptionContainer } from "../gameOptionContainer/gameOptionContainer";
import { setUpBuscaminas } from "../buscaminas/buscaminas";
import { setUpTresraya } from "../tresraya/tresraya";
import { setUpWordle } from "../wordle/wordle";
import { setUpToast } from "../toast/toast";
import { setUpButton } from "../button/button";
import { resetCurrentRow } from "../wordleUtils/wordleUtils";

import "./gameContainer.scss";

export function setUpGameContainer(component, name) {
  component.textContent = "";

  const titleSection = document.createElement("section");
  titleSection.classList.add("titleSection");

  titleSection.append(
    setUpButton("fas fa-arrow-left", "Atrás", () => {
      setUpGameOptionContainer(component);
    })
  );

  const gameTitle = document.createElement("h2");
  gameTitle.textContent = name.toUpperCase();
  titleSection.append(gameTitle);

  titleSection.append(
    setUpButton("fas fa-repeat", "Volver a jugar", () => {
      setUpGameContainer(component, name);
    })
  );

  resetCurrentRow();

  const gameSection = document.createElement("section");

  switch (name) {
    case "Wordle":
      gameSection.append(setUpWordle());
      break;
    case "Busca Minas":
      gameSection.append(setUpBuscaminas(8, 8, 10));
      break;
    case "3 en Raya":
      gameSection.append(setUpTresraya());
  }

  //component.append(titleSection);
  component.append(gameSection);
  component.append(setUpToast());
  return component;
}
