import "./tooltip.scss";
import "../../styles/global.scss";

export function setUpToolTip(text) {
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("tooltip");

  return span;
}
