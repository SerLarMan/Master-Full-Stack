import { setUpImageCard } from "../ImageCard/imageCard";

import "../../styles/global.scss";
import "./cardContainer.scss";

const id = "vHkgxEBcvsBZ7kmjwUB5t-0IY0oxZnajPAiPa6dZlwg";
const UNSPLASH_ROOT = "https://api.unsplash.com";

async function getImages(query) {
  const res = await fetch(
    `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${id}&per_page=20`
  );

  return await res.json();
}

function generateImageColumns(images, columnCount) {
  const colsHeights = Array(columnCount).fill(0);
  const cols = [...Array(columnCount)].map(() => []);

  console.log(images)

  images.forEach((image) => {
    // Se saca la columna con menos "altura" y el índice de esa columna
    const smallestHeight = Math.min(...colsHeights);
    const indexOfSmallestHeight = colsHeights.indexOf(Math.min(...colsHeights));

    // En la columna con menos "altura" se mete la imagen
    const smallestColumn = cols[indexOfSmallestHeight];
    smallestColumn.push(image);

    // Se saca la altura de la imagen que se acaba de meter y se actualiza la "altura" de la columna
    const height = getRelativeImageHeight(image, 200);
    colsHeights[indexOfSmallestHeight] = smallestHeight + height;
  });

  return cols;
}

function getRelativeImageHeight(image, targetWidth) {
  const widthQuotient = targetWidth / image.width;
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
  return setUpImageCard(image);
}

export function setUpCardContainer(query) {
  const main = document.querySelector("main");
  main.textContent = "";

  // Query a la API de unsplash
  const images = [];
  getImages(query).then((imagesPromise) => {
    imagesPromise.results.forEach((res) => images.push(res));
    const columnsCount = 7;
    const imageColumns = generateImageColumns(images, columnsCount);

    const container = document.createElement("div");
    container.classList.add("container");

    imageColumns.forEach((col) => {
      container.append(renderColumn(col));
    });

    main.append(container);
  });
}
