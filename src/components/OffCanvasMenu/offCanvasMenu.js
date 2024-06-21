import { setUpIconButton } from "../IconButton/iconButton";

import "./offCanvasMenu.scss";
import "../../styles/global.scss";

export function setUpOffCanvasMenu() {
  const main = document.querySelector("main");

  const sidecanvas = document.createElement("div");
  sidecanvas.classList.add("sidecanvas");

  sidecanvas.append(
    setUpIconButton(
      "fas fa-xmark fa-lg",
      () => {
        const sidecanvas = document.querySelector(".sidecanvas");
        sidecanvas.style.width = "0";

        const main = document.querySelector("main");
        main.style.marginLeft = "0";
      },
      "Cerrar"
    )
  );

  main.append(sidecanvas);
}
