import { setUpCardContainerByCollection } from "../CardContainer/cardContainer";

import "../../styles/global.scss";
import "./collectionCard.scss";

export function setUpCollectionCard(image) {
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
  console.log(e.currentTarget.image);

  setUpCardContainerByCollection(e.currentTarget.image.id);
}
