import { setUpCabecera } from "./src/components/Cabecera/cabecera";
import { setUpCardContainer } from "./src/components/CardContainer/cardContainer";

const app = document.querySelector("#app");

const header = document.createElement("header");
app.append(header);
setUpCabecera();

const main = document.createElement("main");
app.append(main);
let columns = 5;
setUpCardContainer(undefined);
