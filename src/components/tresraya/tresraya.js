export function setUpTresraya(width, height) {
  const div = document.createElement("div");

  const board = document.createElement("div");

  createBoard(width, height, board);

  div.append(board);
  return div;
}

function createBoard(width, height, board) {
    
}
