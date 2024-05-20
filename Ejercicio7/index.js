/**
 * Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
 */
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const divPrint = document.querySelector("[data-function='printHere']");
const ul = document.createElement("ul");
places.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);
});
divPrint.appendChild(ul);
