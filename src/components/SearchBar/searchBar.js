import "../../styles/global.scss";
import "./searchBar.scss";

export function setUpSearchBar() {
  const searchForm = document.createElement("form");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.classList.add("fontAwesome");
  searchInput.placeholder = "&#xf0e0; Busqueda";

  searchForm.append(searchInput);

  return searchForm;
}
