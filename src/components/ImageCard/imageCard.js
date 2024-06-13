import "../../styles/global.scss";

export function setUpImageCard() {
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("imageCard");

  const img = document.createElement("img");
  img.src = "";

  imageDiv.append(img);
  return imageDiv;
}
