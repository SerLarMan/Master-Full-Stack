import { setUpCardContainer } from "../CardContainer/cardContainer";

import "../../styles/global.scss";
import "./searchBar.scss";

export function setUpSearchBar() {
  const searchForm = document.createElement("form");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.classList.add("fontAwesome");
  searchInput.placeholder = "&#xf0e0; Busqueda";

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if(searchInput.value) {
      setUpCardContainer(searchInput.value);
    } else {
      setUpCardContainer(undefined);
    }
  });

  searchForm.append(searchInput);

  return searchForm;
}
