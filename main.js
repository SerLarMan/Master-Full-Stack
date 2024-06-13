import { setUpCabecera } from "./src/components/Cabecera/cabecera";
import { setUpCardContainer } from "./src/components/CardContainer/cardContainer";

const app = document.querySelector("#app");

app.append(setUpCabecera());
app.append(setUpCardContainer());
