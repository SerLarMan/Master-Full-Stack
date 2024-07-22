import "./formInput.scss";
import "../../styles/global.scss";

export function setUpFormInput(icon, type, placeholder) {
  const div = document.createElement("div");
  div.classList.add("formInput");

  const i = document.createElement("i");
  i.className = icon;

  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.required = true;

  div.append(i);
  div.append(input);
  return div;
}
