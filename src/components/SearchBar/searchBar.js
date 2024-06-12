export function setUpSearchBar() {
  const searchForm = document.createElement("form");

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "🔎 Busqueda";

  searchForm.append(searchInput);

  return searchForm;
}
