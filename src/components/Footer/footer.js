import "./footer.scss";
import "../../styles/global.scss";

export function setUpFooter(component) {
  const span = document.createElement("span");
  span.textContent = "Made by Sergio Lara 2024";

  component.append(span);
  return component;
}
