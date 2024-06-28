import { setUpHeader } from "./src/components/Header/header";
import { setUpMain } from "./src/components/Main/main";
import { setUpFooter } from "./src/components/Footer/footer";

import "./src/styles/global.scss";

const app = document.querySelector("#app");

const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

app.append(setUpHeader(header));
app.append(setUpMain(main));
app.append(setUpFooter(footer));
