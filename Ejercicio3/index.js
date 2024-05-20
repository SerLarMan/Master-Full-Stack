/**
 * 3.1 Basandote en el array siguiente, crea una lista ul > li
 * dinámicamente en el html que imprima cada uno de los paises.
 */
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul1 = document.createElement("ul");
countries.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  ul1.appendChild(li);
});
document.body.appendChild(ul1);

/**
 * 3.2 Elimina el elemento que tenga la clase .fn-remove-me.
 */
const removedElem = document.querySelector(".fn-remove-me");
document.body.removeChild(removedElem);

/**
 * 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
 * en el div de html con el atributo data-function="printHere".
 */
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const ul2 = document.createElement("ul");
cars.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  li.setAttribute("data-function", "printHere");
  ul2.appendChild(li);
});
document.body.appendChild(ul2);

/**
 * 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
 * h4 para el titulo y otro elemento img para la imagen.
 */
const randomObj = [
  { title: "Random title 1", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title 2", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title 3", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title 4", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title 5", imgUrl: "https://picsum.photos/300/200?random=5" },
];
randomObj.forEach((item) => {
  let div = document.createElement("div");

  let h4 = document.createElement("h4");
  h4.innerText = item.title;

  let img = document.createElement("img");
  img.src = item.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
});

/**
 * 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
 * elemento de la serie de divs.
 */
const buttonDeleteLast = document.createElement("button");
buttonDeleteLast.innerText = "Eliminar último div";
buttonDeleteLast.addEventListener("click", () => {
  const lastDiv = document.querySelector(
    "div:last-of-type:not([data-function])"
  );
  document.body.removeChild(lastDiv);
});
document.body.appendChild(buttonDeleteLast);

/**
 * 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
 * divs que elimine ese mismo elemento del html.
 */
const divList = document.querySelectorAll(
  "div:not([data-function])"
);
divList.forEach((item) => {
  let buttonDelete = document.createElement("button");
  buttonDelete.innerText = "Eliminar div";
  buttonDelete.addEventListener("click", () => {
    document.body.removeChild(item);
  });

  item.appendChild(buttonDelete);
});
