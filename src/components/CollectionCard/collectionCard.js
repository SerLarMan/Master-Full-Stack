import { setUpCardContainerByCollection } from "../CardContainer/cardContainer";

import "../../styles/global.scss";
import "./collectionCard.scss";

let COLLECTIONS = [];

export function setUpCollectionCard(image, collections) {
  COLLECTIONS = collections;

  const collectionCard = document.createElement("div");
  collectionCard.classList.add("collectionCard");

  const img = document.createElement("img");
  img.src = image.urls.thumb;
  img.classList.add("displayImage");
  img.image = image;
  img.addEventListener("click", displayCollectionPhotos);

  collectionCard.append(img);
  return collectionCard;
}

function displayCollectionPhotos(e) {
  const collection = COLLECTIONS.find(
    (collection) => collection.cover_photo.id == e.currentTarget.image.id
  );

  setUpCardContainerByCollection(collection.id);
}
