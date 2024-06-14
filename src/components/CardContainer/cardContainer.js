import { setUpImageCard } from "../ImageCard/imageCard";

import "../../styles/global.scss";
import "./cardContainer.scss";

const id = "vHkgxEBcvsBZ7kmjwUB5t-0IY0oxZnajPAiPa6dZlwg";
const UNSPLASH_ROOT = "https://api.unsplash.com";

export function setUpCardContainer() {
  const main = document.createElement("main");

  // Query a la API de unsplash
  const images = [];
  getImages().then((imagesPromise) => {
    imagesPromise.results.forEach((res) => images.push(res));
  });

  const columnsCount = 4;
  const imageColumns = generateImageColumns(images, columnsCount);

  const container = document.createElement("div");
  container.classList.add("container");

  imageColumns.forEach((col) => {
    container.append(renderColumn(col));
  });

  main.append(container);
  return main;
}

function generateImageColumns(images, columnCount = 4) {
  const colsHeights = Array(columnCount).fill(0);
  const cols = [...Array(columnCount)].map(() => []);

  images.forEach((image, i) => {
    // Se saca la columna con menos "altura" y el índice de esa columna
    const smallestHeight = Math.min(...colsHeights);
    const indexOfSmallestheight = colsHeights.indexOf(Math.min(...colsHeights));

    // En la columna con menos "altura" se mete la imagen
    const smallestColumn = cols[indexOfSmallestheight];
    smallestColumn.push(image);

    // Se saca la altura de la imagen que se acaba de meter y se actualiza la "altura" de la columna
    const height = getRelativeImageHeight(image, 200);
    colsHeights[indexOfSmallestheight] = smallestHeight + height;

    const columnToAddImageTo = i % columnCount;
    cols[columnToAddImageTo].push(image);
  });

  return cols;
}

function getRelativeImageHeight(image, targetWidth) {
  const widthQuotient = targetWidth / image.widh;
  const relativeHeight = widthQuotient * image.height;

  return relativeHeight;
}

function renderColumn(col) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("column");

  col.forEach((image) => {
    colDiv.append(renderImage(image));
  });

  return colDiv;
}

function renderImage(image) {
  return setUpImageCard(image.urls.raw);
}

async function getImages() {
  const res = await fetch(
    `${UNSPLASH_ROOT}/search/photos?query=red panda&client_id=${id}&per_page=20`
  );

  return await res.json();
}
