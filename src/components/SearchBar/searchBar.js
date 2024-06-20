import { setUpCardContainer } from "../CardContainer/cardContainer";

import "../../styles/global.scss";
import "./searchBar.scss";

export function setUpSearchBar() {
  const searchForm = document.createElement("form");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.classList.add("fontAwesome");
  searchInput.placeholder = "&#xf0e0; Buscar";

  searchForm.addEventListener("submit", search);

  searchForm.append(searchInput);

  return searchForm;
}

function search(e) {
  e.preventDefault();

  const actualButtonClicked = document.querySelector("button.clickedTextButton");
  const type =
    actualButtonClicked.textContent == "Inicio" ? "photos" : "collections";

  const input = document.querySelector("input");

  if (input.value) {
    setUpCardContainer(input.value, type);
  } else {
    setUpCardContainer(undefined, type);
  }
}
