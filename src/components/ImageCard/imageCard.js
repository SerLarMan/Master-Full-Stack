import "../../styles/global.scss";

export function setUpImageCard(src) {
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("imageCard");

  const img = document.createElement("img");
  img.src = src;

  imageDiv.append(img);
  return imageDiv;
}
