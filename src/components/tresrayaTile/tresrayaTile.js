export function setUpTresrayaTile(tile) {
  const tileDiv = document.createElement("div");
  tileDiv.x = tile.x;
  tileDiv.y = tile.y;
  tileDiv.classList.add("tile", "normal");
  tileDiv.clickable = true;
  tileDiv.addEventListener("mouseup", clickTile);

  return tileDiv;
}

function clickTile(e) {
  const tile = getTileFromEvent(e);
  if (tile && tile.clickable) {
  }
}

function getTileFromEvent(e) {
  const tiles = document.querySelectorAll(".tile");
  return Array.from(tiles).find(
    (t) => t.x === e.currentTarget.x && t.y === e.currentTarget.y
  );
}
