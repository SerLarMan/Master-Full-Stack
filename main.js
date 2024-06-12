import "./src/styles/style.sccs";
import { setUpCabecera } from "./src/components/Cabecera/cabecera";
import { setUpCardContainer } from "./src/components/CardContainer/cardContainer";

document.querySelector("#app").innerHTML = `
  <header></header>
  <main></main>
`;

setUpCabecera(document.querySelector("header"));
setUpCardContainer(document.querySelector("main"));
