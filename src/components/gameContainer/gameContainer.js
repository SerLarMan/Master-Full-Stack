export function setUpGameContainer(component, name) {
  console.log(name);
  component.textContent = "";

  const gameContainer = document.createElement("div");

  const gameTitle = document.createElement("h2");
  gameTitle.textContent = name;
  gameContainer.append(gameTitle);

  component.append(gameContainer);
  return component;
}
