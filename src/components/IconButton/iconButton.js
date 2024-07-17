export function setUpIconButton(icon, url) {
  const div = document.createElement("div");
  div.addEventListener("click", () => {
    window.open(url, "_blank");
  });

  const i = document.createElement("i");
  i.className = icon;

  div.append(i);
  return div;
}
