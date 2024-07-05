import { setUpBuscaminasTile } from "../buscaminasTile/buscaminasTile";
import { setUpGameContainer } from "../gameContainer/gameContainer";

import "./buscaminas.scss";

export function setUpBuscaminas(width, height, minesNumber) {
  const div = document.createElement("div");

  const button = document.createElement("button");
  button.textContent = "Reset";
  button.addEventListener("click", () => {
    const main = document.querySelector("main");
    setUpGameContainer(main, "Busca Minas");
  });

  const board = document.createElement("div");
  board.classList.add("board");
  board.flags = minesNumber;
  board.mines = minesNumber;

  createBoard(width, height, board);

  div.append(button);
  div.append(board);
  return div;
}

function createBoard(x, y, board) {
  let tiles = [];
  let mines = createMines(x, y, board.mines);

  for (let i = 0; i < y; i++) {
    let auxArray = [];
    for (let j = 0; j < x; j++) {
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

function createMines(x, y, minesNumber) {
  let mines = [];

  while (mines.length < minesNumber) {
    let minesCoordX = Math.floor(Math.random() * x + 1);
    let minesCoordY = Math.floor(Math.random() * y + 1);

    if (
      mines.every((mine) => mine.x !== minesCoordX || mine.y !== minesCoordY)
    ) {
      mines.push({ x: minesCoordX, y: minesCoordY });
    }
  }

  return mines;
}

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