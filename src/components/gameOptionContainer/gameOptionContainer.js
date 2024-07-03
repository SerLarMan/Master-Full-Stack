import { setUpGameOption } from "../gameOption/gameOption";

export function setUpGameOptionContainer(component) {
  const gameOptionContainer = document.createElement("div");

  gameOptionContainer.append(setUpGameOption("", "Come Cocos"));
  gameOptionContainer.append(setUpGameOption("", "Busca Minas"));
  gameOptionContainer.append(setUpGameOption("", "3 en Raya"));

  component.append(gameOptionContainer);
  return component
}
