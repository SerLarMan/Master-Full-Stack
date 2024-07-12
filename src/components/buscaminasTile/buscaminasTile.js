import { showToast } from "../toast/toast";

import "./buscaminasTile.scss";

export function setUpBuscaminasTile(tile) {
  const tileDiv = document.createElement("div");
  tileDiv.x = tile.x;
  tileDiv.y = tile.y;
  tileDiv.classList.add("tile", "normal");
  tileDiv.processed = false;
  tileDiv.withFlag = false;
  tileDiv.clickable = true;
  tileDiv.addEventListener("mouseup", clickTile);

  const span = document.createElement("span");
  span.textContent = tile.value;
  span.classList.add("hidden");
  tileDiv.append(span);

  return tileDiv;
}

/**
 * Función que le da la funcionalidad de click a cada casilla
 * @param {*} e
 */
function clickTile(e) {
  const tile = getTileFromEvent(e);
  if (tile && tile.clickable) {
    handleTileClick(e, tile);
  }
}

/**
 * Función que busca la casilla clickada de entre todas
 * @param {*} e
 * @returns la casilla clickada
 */
function getTileFromEvent(e) {
  const tiles = document.querySelectorAll(".tile");
  return Array.from(tiles).find(
    (t) => t.x === e.currentTarget.x && t.y === e.currentTarget.y
  );
}

/**
 * Función que diferencia si el click ha sido izquierdo o derecho
 * @param {*} e
 * @param {*} tile la casilla clickada
 */
function handleTileClick(e, tile) {
  if (e.button === 0) {
    handleLeftClick(tile);
  } else if (e.button === 2) {
    handleRightClick(tile);
  }
}

/**
 * Función que maneja el click izquierdo
 * @param {*} tile la casilla clickada
 */
function handleLeftClick(tile) {
  if (!tile.withFlag) {
    if (tile.firstChild.textContent === "💣") {
      tile.classList.remove("normal");
      tile.classList.add("wrong");
      tile.firstChild.classList.remove("hidden");
      endGame();
    } else {
      showTile(tile);
      checkEmpty(tile);
      winGame();
    }
  }
}

/**
 * Función que maneja el click derecho
 * @param {*} tile la casilla clickada
 */
function handleRightClick(tile) {
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  const board = document.querySelector(".board");

  if (!tile.classList.contains("clicked")) {
    if (tile.withFlag) {
      removeFlag(tile, board);
    } else {
      addFlag(tile, board);
    }
  }

  console.log(board.flags);
}

/**
 * Función que quita una bandera de la casilla
 * @param {*} tile la casilla clickada
 * @param {*} board el elemento tablero
 */
function removeFlag(tile, board) {
  tile.withFlag = false;
  board.flags += 1;
  tile.removeChild(tile.lastElementChild);
}

/**
 * Función que añade una bandera a la casilla
 * @param {*} tile la casilla clickada
 * @param {*} board el elemento tablero
 */
function addFlag(tile, board) {
  tile.withFlag = true;
  board.flags -= 1;

  const span = document.createElement("span");
  span.textContent = "🚩";
  tile.append(span);
}

/**
 * Función recursiva que clicka las casillas de alrededor cuando la
 * casilla clickada no tiene ningún número
 * @param {*} currTile la casilla actual
 */
function clearEmptyTiles(currTile) {
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

    if (newX >= 0 && newX < 10 && newY >= 0 && newY < 8) {
      const tile = findTile(newX, newY);
      if (tile && !tile.processed) {
        tile.processed = true;
        showTile(tile);
        checkEmpty(tile);
      }
    }
  });
}

function findTile(x, y) {
  const tiles = document.querySelectorAll(".tile");
  return Array.from(tiles).find((tile) => tile.x === x && tile.y === y);
}

/**
 * Función que descubre la casilla clickada
 * @param {*} tile la casilla clickada
 */
function showTile(tile) {
  if (
    !tile.classList.contains("clicked") &&
    !tile.classList.contains("wrong")
  ) {
    tile.classList.remove("normal");
    tile.classList.add("clicked");
    tile.firstChild.classList.remove("hidden");
  }
}

/**
 * Función que comprueba si la casilla clickada está vacía
 * @param {*} tile la casilla clickada
 */
function checkEmpty(tile) {
  if (!tile.firstChild.textContent) {
    clearEmptyTiles(tile);
  }
}

/**
 * Función que se encarga de la condición de victoria en el juego
 */
function winGame() {
  const tiles = Array.from(document.querySelectorAll(".tile:not(.clicked)"));

  if (tiles.every((tile) => tile.firstChild.textContent === "💣")) {
    tiles.forEach((tile) => {
      tile.clickable = false;
    });
    showToast("¡Enhorabuena, no has explotado! Has ganado 200 puntos.")
  }
}

/**
 * Función que se encarga de la condición de derrota en el juego
 */
function endGame() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.clickable = false;
    if (tile.firstChild.textContent === "💣") {
      if (tile.lastChild.textContent !== "🚩") {
        showTile(tile);
      }
    } else if (tile.withFlag) {
      const span = document.createElement("span");
      span.textContent = "X";
      span.style.zIndex = "2";
      span.style.fontSize = "2em";
      tile.append(span);
    }
  });
  showToast("¡Has explotado!")
}
