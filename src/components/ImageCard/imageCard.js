import { setUpUserInfo } from "../UserInfo/userInfo";
import { setUpIconButton } from "../IconButton/iconButton";

import "../../styles/global.scss";
import "./imageCard.scss";

export function setUpImageCard(image) {
  const imageCard = document.createElement("div");
  imageCard.classList.add("imageCard");

  const img = document.createElement("img");
  img.src = image.urls.thumb;
  img.classList.add("displayImage");

  const downloadButton = setUpIconButton("fas fa-download fa-lg", () => {});
  downloadButton.classList.add("downloadButton");

  imageCard.append(img);
  imageCard.append(setUpUserInfo(image.user));
  imageCard.append(downloadButton);
  return imageCard;
}
