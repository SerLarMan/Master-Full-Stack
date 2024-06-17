import { setUpSearchBar } from "../SearchBar/searchBar";
import { setUpTextButton } from "../TextButton/textButton";
import { setUpIconButton } from "../IconButton/iconButton";
import { setUpCardContainer } from "../CardContainer/cardContainer";

import "../../styles/global.scss";
import "./cabecera.scss";

export function setUpCabecera() {
  const header = document.querySelector("header");

  // Icono de pinterest
  const divBrand = document.createElement("div");
  divBrand.className = "divBrand";

  const brand = document.createElement("i");
  brand.className = "fa-brands fa-pinterest fa-2xl";
  brand.style.color = "#fb0909";
  brand.addEventListener("click", () => {
    const button = document.querySelector(".textButton");
    onTextButtonClicked(button);
    goHome();
  });

  divBrand.append(brand);
  header.append(divBrand);

  // Se marca el botón inicio como clickado al cargar la página
  const inicioButton = setUpTextButton("Inicio", onTextButtonClicked);
  inicioButton.classList.add("clickedTextButton");
  header.append(inicioButton);

  header.append(setUpTextButton("Explorar", onTextButtonClicked));
  header.append(setUpTextButton("Crear", onTextButtonClicked));

  header.append(setUpSearchBar());

  header.append(setUpIconButton("fas fa-bell fa-lg", onIconButtonClicked));
  header.append(
    setUpIconButton("fas fa-comment-dots fa-lg", onIconButtonClicked)
  );
}

/**
 * Función que añade la clase clickedButton al botón de texto clickado para darle estilos
 * @param {*} e evento
 */
function onTextButtonClicked(e) {
  const buttons = document.querySelectorAll(".textButton");
  buttons.forEach((button) => button.classList.remove("clickedTextButton"));

  if (e.target) {
    e.target.classList.add("clickedTextButton");
    if (e.target.textContent == "Inicio") {
      goHome();
    }
  } else {
    e.classList.add("clickedTextButton");
  }
}

/**
 * Función que añade la clase clickedButton al botón con icono clickado para darle estilos
 * @param {*} e evento
 */
function onIconButtonClicked(e) {
  const buttons = document.querySelectorAll(".iconButton");
  buttons.forEach((button) => button.classList.remove("clickedIconButton"));

  if (!e.target.classList.contains("clickedIconButton")) {
    e.target.classList.add("clickedIconButton");
  } else {
    e.target.classList.remove("clickedIconButton");
  }
}

function goHome() {
  const input = document.querySelector("form > input");
  input.value = "";

  setUpCardContainer(undefined);
}
