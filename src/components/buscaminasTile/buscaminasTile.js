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

function clickTile(e) {
  const tile = getTileFromEvent(e);
  if (tile && tile.clickable) {
    handleTileClick(e, tile);
  }
}

function getTileFromEvent(e) {
  const tiles = document.querySelectorAll(".tile");
  return Array.from(tiles).find(
    (t) => t.x === e.currentTarget.x && t.y === e.currentTarget.y
  );
}

function handleTileClick(e, tile) {
  if (e.button === 0) {
    handleLeftClick(tile);
  } else if (e.button === 2) {
    handleRightClick(tile);
  }
}

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

function removeFlag(tile, board) {
  tile.withFlag = false;
  board.flags += 1;
  tile.removeChild(tile.lastElementChild);
}

function addFlag(tile, board) {
  tile.withFlag = true;
  board.flags -= 1;

  const span = document.createElement("span");
  span.textContent = "🚩";
  tile.append(span);
}

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

function checkEmpty(tile) {
  if (!tile.firstChild.textContent) {
    clearEmptyTiles(tile);
  }
}

function winGame() {
  const tiles = Array.from(document.querySelectorAll(".tile:not(.clicked)"));
  
  if (tiles.every((tile) => tile.firstChild.textContent === "💣")) {
    console.log("you won");
    tiles.forEach((tile) => {
      tile.clickable = false;
    });
  }
}

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
}
