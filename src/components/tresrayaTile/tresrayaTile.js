import { nextTurn, turn } from "../tresrayaUtils/tresrayaUtils";
import { showToast } from "../toast/toast";

import "./tresrayaTile.scss";

export function setUpTresrayaTile(tile) {
  const tileDiv = document.createElement("div");
  tileDiv.x = tile.x;
  tileDiv.y = tile.y;
  tileDiv.classList.add("tile");
  tileDiv.clickable = true;
  tileDiv.addEventListener("mouseup", clickTile);

  return tileDiv;
}

function clickTile(e) {
  const tile = getTileFromEvent(e);
  if (tile && tile.clickable) {
    handleTileClick(tile);
  }
}

function getTileFromEvent(e) {
  const tiles = document.querySelectorAll(".tile");
  return Array.from(tiles).find(
    (t) => t.x === e.currentTarget.x && t.y === e.currentTarget.y
  );
}

function handleTileClick(tile) {
  tile.textContent = turn.value;
  tile.clickable = false;

  const tiles = Array.from(document.querySelectorAll(".tile"));

  const victory = winGame(tile, tiles);

  console.log(victory);

  if (!victory) {
    if (tiles.every((tile) => tile.textContent)) {
      endGame();
    } else {
      nextTurn();
    }
  } else {
    tiles.forEach((tile) => (tile.clickable = false));
  }
}

function winGame(currTile, tiles) {
  const tilesX = tiles.filter((tile) => tile.x == currTile.x);
  const tilesY = tiles.filter((tile) => tile.y == currTile.y);

  console.log(currTile);
  console.log(tilesX);
  console.log(tilesY);

  if (
    tilesX.every((tile) => tile.textContent == currTile.textContent) ||
    tilesY.every((tile) => tile.textContent == currTile.textContent)
  ) {
    showToast(
      `¡Enhorabuena, el jugador ${turn.player} ha hecho tres en raya! Ha ganado 300 puntos.`
    );

    return true;
  }

  return false;
}

function endGame() {
  showToast("¡El juego ha acabado en empate!");
}
