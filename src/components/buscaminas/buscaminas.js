import { setUpBuscaminasTile } from "../buscaminasTile/buscaminasTile";

import "./buscaminas.scss";

export function setUpBuscaminas(width, height, minesNumber) {
  const div = document.createElement("div");

  const board = document.createElement("div");
  board.classList.add("board");
  board.flags = minesNumber;
  board.mines = minesNumber;

  createBoard(width, height, board);

  div.append(board);
  return div;
}

/**
 * Función que crea el tablero del buscaminas lógicamente
 * @param {*} width ancho del tablero
 * @param {*} height alto del tablero
 * @param {*} board el elemento tablero
 */
function createBoard(width, height, board) {
  let tiles = [];
  let mines = createMines(width, height, board.mines);

  // Se rellena el tablero dependiendo de las coordenadas donde se han generado las minas
  for (let i = 0; i < height; i++) {
    let auxArray = [];
    for (let j = 0; j < width; j++) {
      let tile = mines.find((mine) => mine.x == j + 1 && mine.y == i + 1);
      tile
        ? auxArray.push({ x: j, y: i, value: "💣" })
        : auxArray.push({ x: j, y: i, value: "0" });
    }
    tiles.push(auxArray);
  }

  tiles = calculateNumbers(mines, tiles);

  drawBoard(tiles, board);
}

/**
 * Función que dibuja el tablero
 * @param {*} tiles 
 * @param {*} board 
 */
function drawBoard(tiles, board) {
  for (let tileRow of tiles) {
    const row = document.createElement("div");
    row.classList.add("row");
    tileRow.forEach((tile) => {
      row.append(setUpBuscaminasTile(tile));
    });

    board.append(row);
  }
}

/**
 * Función que genera aleatoriamente las coordenadas de las minas en el tablero
 * @param {*} width ancho del tablero
 * @param {*} height alto del tablero
 * @param {*} minesNumber el número de minas total en el tablero
 * @returns array de las minas con sus posiciones
 */
function createMines(width, height, minesNumber) {
  let mines = [];

  while (mines.length < minesNumber) {
    let minesCoordX = Math.floor(Math.random() * width + 1);
    let minesCoordY = Math.floor(Math.random() * height + 1);

    if (
      mines.every((mine) => mine.x !== minesCoordX || mine.y !== minesCoordY)
    ) {
      mines.push({ x: minesCoordX, y: minesCoordY });
    }
  }

  return mines;
}

/**
 * Función que cambia el número que contiene las casillas colindantes con minas
 * para saber cuantas minas tiene alrededor
 * @param {*} mines array que contiene las minas con sus posiciones
 * @param {*} tiles array con las casillas del tablero
 * @returns array con las casillas del tablero modificada
 */
function calculateNumbers(mines, tiles) {
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

  mines.forEach((mine) => {
    directions.forEach((dir) => {
      const newX = mine.x + dir.x;
      const newY = mine.y + dir.y;

      if (
        newX > 0 &&
        newX <= tiles[0].length &&
        newY > 0 &&
        newY <= tiles.length
      ) {
        const tile = tiles[newY - 1][newX - 1];
        if (tile.value !== "💣") {
          tile.value = (Number(tile.value) + 1).toString();
        }
      }
    });
  });

  tiles.forEach((tileRow) => {
    tileRow.forEach((tile) => {
      if (tile.value === "0") {
        tile.value = "";
      }
    });
  });

  return tiles;
}