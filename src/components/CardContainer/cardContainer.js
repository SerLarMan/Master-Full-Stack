import { setUpImageCard } from "../ImageCard/imageCard";
import { setUpCollectionCard } from "../CollectionCard/collectionCard";

import "../../styles/global.scss";
import "./cardContainer.scss";

const CLIENTID = "vHkgxEBcvsBZ7kmjwUB5t-0IY0oxZnajPAiPa6dZlwg";
const UNSPLASH_ROOT = "https://api.unsplash.com";

async function getImages(query, type) {
  const res = await fetch(
    `${UNSPLASH_ROOT}/search/${type}?query=${query}&client_id=${CLIENTID}&per_page=20`
  );

  return await res.json();
}

async function getCollectionImages(id) {
  const res = await fetch(
    `${UNSPLASH_ROOT}/collections/${id}/photos?client_id=${CLIENTID}&per_page=20`
  );

  return await res.json();
}

function generateImageColumns(images, columnCount, type) {
  const colsHeights = Array(columnCount).fill(0);
  const cols = [...Array(columnCount)].map(() => []);

  console.log(images);

  images.forEach((image) => {
    const realImage = type == "photos" ? image : image.cover_photo;

    // Se saca la columna con menos "altura" y el índice de esa columna
    const smallestHeight = Math.min(...colsHeights);
    const indexOfSmallestHeight = colsHeights.indexOf(Math.min(...colsHeights));

    // En la columna con menos "altura" se mete la imagen
    const smallestColumn = cols[indexOfSmallestHeight];
    smallestColumn.push(realImage);

    // Se saca la altura de la imagen que se acaba de meter y se actualiza la "altura" de la columna
    const height = getRelativeImageHeight(realImage, 200);
    colsHeights[indexOfSmallestHeight] = smallestHeight + height;
  });

  return cols;
}

function getRelativeImageHeight(image, targetWidth) {
  const widthQuotient = targetWidth / image.width;
  const relativeHeight = widthQuotient * image.height;

  return relativeHeight;
}

function renderColumn(col, type, images) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("column");

  col.forEach((image) => {
    type == "photos"
      ? colDiv.append(setUpImageCard(image))
      : colDiv.append(setUpCollectionCard(image, images));
  });

  return colDiv;
}

export function setUpCardContainer(query, type) {
  const main = document.querySelector("main");
  main.textContent = "";

  // Query a la API de unsplash
  const images = [];
  getImages(query, type).then((imagesPromise) => {
    imagesPromise.results.forEach((res) => images.push(res));

    const columnsCount = 7;
    const imageColumns = generateImageColumns(images, columnsCount, type);

    const container = document.createElement("div");
    container.classList.add("container");

    imageColumns.forEach((col) => {
      container.append(renderColumn(col, type, images));
    });

    main.append(container);
  });
}

export function setUpCardContainerByCollection(id) {
  const main = document.querySelector("main");
  main.textContent = "";

  // Query a la API de unsplash
  const images = [];
  getCollectionImages(id).then((imagesPromise) => {
    imagesPromise.forEach((res) => images.push(res));

    const columnsCount = 7;
    const imageColumns = generateImageColumns(images, columnsCount, "photos");

    const container = document.createElement("div");
    container.classList.add("container");

    imageColumns.forEach((col) => {
      container.append(renderColumn(col, "photos"));
    });

    main.append(container);
  });
}
