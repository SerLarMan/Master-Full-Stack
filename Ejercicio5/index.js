/**
 * Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
 * que imprima cada uno de los albums.
 */
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");
albums.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);
});
document.body.appendChild(ul);
