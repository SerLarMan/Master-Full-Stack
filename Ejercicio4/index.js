/**
 * 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
 * evento click que ejecute un console log con la información del evento del click
 */
const button = document.createElement("button");
button.id = "btnToClick";
button.innerText = "Púlsame";
button.addEventListener("click", (event) => {
  console.log(event);
});
document.body.appendChild(button);

/**
 * 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
 */
const inputList = document.querySelectorAll("input");
inputList.forEach((input) => {
  input.addEventListener("focus", (event) => {
    console.log(event.target.value);
  });
});

/**
 * 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
 */
inputList.forEach((input) => {
  input.addEventListener("input", (event) => {
    console.log(event.target.value);
  });
});
