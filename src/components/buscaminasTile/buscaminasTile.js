import { gMines } from "../buscaminas/buscaminas";

import "./buscaminasTile.scss";

export function setUpBuscaminasTile(tile) {
  const tileDiv = document.createElement("div");
  tileDiv.x = tile.x;
  tileDiv.y = tile.y;
  tileDiv.classList.add("tile", "normal");
  tileDiv.addEventListener("mouseup", clickTile);

  const span = document.createElement("span");
  span.textContent = tile.value;
  //span.classList.add("hidden");
  tileDiv.append(span);

  return tileDiv;
}

function clickTile(e) {
  let flags = gMines;

  const tiles = document.querySelectorAll(".tile");
  let tile;
  tiles.forEach((t) => {
    if (t.x == e.currentTarget.x && t.y == e.currentTarget.y) {
      tile = t;
    }
  });

  switch (e.button) {
    case 0:
      if (!tile.classList.contains("withFlag")) {
        tile.classList.remove("normal");
        tile.classList.add("clicked");

        let span = tile.children[0];
        console.log(span.textContent);
        if (!span.textContent) {
          clearEmptyTiles(tiles, tile);
        }
        //span.classList.remove("hidden");
      }
      break;
    case 2:
      window.addEventListener("contextmenu", (a) => a.preventDefault());
      if (!tile.classList.contains("clicked")) {
        if (tile.classList.contains("withFlag")) {
          flags += 1;
          tile.classList.remove("withFlag");
          tile.classList.add("normal");
        } else {
          flags > 0 ? (flags -= 1) : null;
          tile.classList.remove("normal");
          tile.classList.add("withFlag");
        }
      }
  }
}

function clearEmptyTiles(tiles, currTile) {
  const directions = [
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ];

  directions.forEach((dir) => {
    const newX = currTile.x + dir.x;
    const newY = currTile.y + dir.y;

    tiles.forEach((tile) => {
      if (newX > 0 && newX <= 10 && newY > 0 && newY <= 8) {
        const span = currTile.children[0];

        if (!span.textContent) {
          tile.classList.remove("normal");
          tile.classList.add("clicked");
        }
      }
    });
  });
}
