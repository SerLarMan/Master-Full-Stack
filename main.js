import { setUpGameOptionContainer } from "./src/components/gameOptionContainer/gameOptionContainer";

import "./src/styles/style.css";

const app = document.querySelector("#app");

const header = document.createElement("header");
const main = document.createElement("main");

app.append(header);
app.append(setUpGameOptionContainer(main));
