import { setUpSearchBar } from "../SearchBar/searchBar";
import { setUpTextButton } from "../TextButton/textButton";
import { setUpIconButton } from "../IconButton/iconButton";
import { setUpCardContainer } from "../CardContainer/cardContainer";

import "../../styles/global.scss";
import "./cabecera.scss";

export function setUpCabecera() {
  const header = document.querySelector("header");
  header.textContent = "";

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

  header.append(setUpSearchBar());

  header.append(
    setUpIconButton("fas fa-bell fa-lg", onIconButtonClicked, "Notificaciones")
  );
  header.append(
    setUpIconButton(
      "fas fa-comment-dots fa-lg",
      onIconButtonClicked,
      "Mensajes"
    )
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

    // Se cambia de "pantalla" depende del botón
    if (e.target.textContent == "Inicio") {
      goHome();
    } else if (e.target.textContent == "Explorar") {
      goCollections();
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
  if (!e.target.classList.contains("clickedIconButton")) {
    const buttons = document.querySelectorAll(".iconButton");
    buttons.forEach((button) => button.classList.remove("clickedIconButton"));
    e.target.classList.add("clickedIconButton");

    const sidecanvas = document.querySelector(".sidecanvas");
    sidecanvas.style.width = "250px";

    const main = document.querySelector("main");
    main.style.marginLeft = "250px";
  } else {
    e.target.classList.remove("clickedIconButton");
  }
}

function goHome() {
  const input = document.querySelector("form > input");
  input.value = "";

  setUpCardContainer(undefined, "photos");
}

function goCollections() {
  const input = document.querySelector("form > input");
  input.value = "";

  setUpCardContainer(undefined, "collections");
}
