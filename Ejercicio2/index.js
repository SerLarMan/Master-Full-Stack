/**
 * 2.1 Inserta dinamicamente en un html un div vacio con javascript.
 */
const div1 = document.createElement("div");
document.body.appendChild(div1);

/**
 * 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
 */
const div2 = document.createElement("div");
const p = document.createElement("p");
div2.appendChild(p);
document.body.appendChild(div2);

/**
 * 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
 * loop con javascript.
 */
const div3 = document.createElement("div");
for (let i = 0; i < 6; i++) {
  let p = document.createElement("p");
  div3.appendChild(p);
}
document.body.appendChild(div3);

/**
 * 2.4 Inserta dinamicamente con javascript en un html una p con el
 * texto 'Soy dinámico!'.
 */
const pDinamic = document.createElement("p");
pDinamic.innerText = "Soy dinámico!";
document.body.appendChild(pDinamic);

/**
 * 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
 */
const h2 = document.querySelector("h2.fn-insert-here");
h2.innerText = "Wubba Lubba dub dub";

/**
 * 2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
*/
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
apps.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);
});
document.body.appendChild(ul);

/**
 * 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
 */
const removedItems = document.querySelectorAll(".fn-remove-me");
removedItems.forEach((item) => document.body.removeChild(item));

/**
 * 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
 * Recuerda que no solo puedes insertar elementos con .appendChild.
 */
const pMiddle = document.createElement("p");
pMiddle.innerText = "Voy en medio!";
const div4 = document.querySelector(":nth-child(7)");
div4.parentNode.insertBefore(pMiddle, div4);

/**
 * 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
 * .fn-insert-here
 */
const divInsert = document.querySelectorAll("div.fn-insert-here");
divInsert.forEach((item) => {
  let pInsert = document.createElement("p");
  pInsert.innerText = "Voy dentro!";
  item.appendChild(pInsert);
});
