export function setUpIconButton(icon, clickFunction) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add("iconButton");
  
    button.addEventListener("click", clickFunction)
  
    return button;
  }