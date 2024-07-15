import { nextTurn, turn } from "../tresrayaUtils/tresrayaUtils";
import { showToast } from "../toast/toast";

import "./tresrayaTile.scss";

export function setUpTresrayaTile(tile) {
  const tileDiv = document.createElement("div");
  tileDiv.x = tile.x;
  tileDiv.y = tile.y;
  tileDiv.classList.add("tile");
  tileDiv.clickable = true;
  tileDiv.addEventListener("mouseup", handleTileClick);

  return tileDiv;
}

function handleTileClick(e) {
  const tile = e.currentTarget;
  if (tile && tile.clickable) {
    updateTile(tile);
    const tiles = getAllTiles();
    if (winGame(tile, tiles)) {
      disableAllTiles(tiles);
      showToast(
        `¡Enhorabuena, el jugador ${turn.player} ha hecho tres en raya! Ha ganado 300 puntos.`
      );
    } else if (isBoardFull(tiles)) {
      endGame();
    } else {
      nextTurn();
    }
  }
}

function getAllTiles() {
  return Array.from(document.querySelectorAll(".tile"));
}

function updateTile(tile) {
  tile.textContent = turn.value;
  tile.clickable = false;
}

function winGame(currTile, tiles) {
  return (
    checkLineVictory(currTile, tiles, "x") ||
    checkLineVictory(currTile, tiles, "y") ||
    checkDiagonalVictory(currTile, tiles)
  );
}

function checkLineVictory(currTile, tiles, axis) {
  const tilesInLine = tiles.filter((tile) => tile[axis] == currTile[axis]);
  return tilesInLine.every((tile) => tile.textContent == currTile.textContent);
}

function checkDiagonalVictory(currTile, tiles) {
  const isMainDiagonal = currTile.x === currTile.y;
  const isReversedDiagonal = currTile.x + currTile.y === 2;

  const mainDiagonalTiles = tiles.filter((tile) => tile.x === tile.y);
  const reversedDiagonalTiles = tiles.filter((tile) => tile.x + tile.y === 2);

  const mainDiagonalVictory =
    isMainDiagonal &&
    mainDiagonalTiles.every(
      (tile) => tile.textContent === currTile.textContent
    );

  const reversedDiagonalVictory =
    isReversedDiagonal &&
    reversedDiagonalTiles.every(
      (tile) => tile.textContent === currTile.textContent
    );

  return mainDiagonalVictory || reversedDiagonalVictory;
}

function disableAllTiles(tiles) {
  tiles.forEach((tile) => (tile.clickable = false));
}

function isBoardFull(tiles) {
  return tiles.every((tile) => tile.textContent);
}

function endGame() {
  showToast("¡El juego ha acabado en empate!");
}
