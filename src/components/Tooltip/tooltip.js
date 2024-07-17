import "./tooltip.scss";
import "../../styles/global.scss";

export function setUpTootlTip(text) {
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("tooltip");

  const tooltipContainer = Array.from(
    document.querySelectorAll(".tooltipContainer")
  );
  tooltipContainer.forEach((elem) => {
    elem.addEventListener("onmouseover", () => {
      span.style.visibility = "visible";
      span.style.opacity = "1";
    });
  });

  return span;
}
