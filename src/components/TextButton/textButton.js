export function setUpTextButton(text, clickFunction) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("textButton");

  button.addEventListener("click", clickFunction)

  return button;
}
