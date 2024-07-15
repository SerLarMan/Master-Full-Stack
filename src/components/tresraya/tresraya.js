import { setUpTresrayaTile } from "../tresrayaTile/tresrayaTile";

import "./tresraya.scss";

export function setUpTresraya() {
  const div = document.createElement("div");

  const board = document.createElement("div");

  createBoard(board);

  div.append(board);
  return div;
}

function createBoard(board) {
  let tiles = [];

  for (let i = 0; i < 3; i++) {
    let auxArray = [];
    for (let j = 0; j < 3; j++) {
      auxArray.push({ x: j, y: i, value: "" });
    }
    tiles.push(auxArray);
  }

  drawBoard(tiles, board);
}

function drawBoard(tiles, board) {
  for (let tileRow of tiles) {
    const row = document.createElement("div");
    row.classList.add("row");
    tileRow.forEach((tile) => {
      row.append(setUpTresrayaTile(tile));
    });

    board.append(row);
  }
}
