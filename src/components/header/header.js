export function setUpHeader(component) {
  component.textContent = "";

  const h1 = document.createElement("h1");
  h1.textContent = "GAMES HUB";

  const span = document.createElement("span");
  span.textContent = "Tus puntos: ";

  component.append(h1);
  component.append(span);
  return component;
}
