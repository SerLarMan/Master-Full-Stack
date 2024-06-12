import { setUpTextButton } from "../TextButton/textbutton";
import { setUpSearchBar } from "../SearchBar/searchBar";

export function setUpCabecera(element) {
  element.append(setUpTextButton("Inicio"), () => {});
  element.append(setUpTextButton("Hoy"), () => {});
  element.append(setUpTextButton("Crear"), () => {});
  element.append(setUpSearchBar());
}
