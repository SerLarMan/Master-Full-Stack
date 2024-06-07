/**
 * Crea una función llamada findArrayIndex que reciba como parametros un
 * array de textos y un texto y devuelve la posición del array cuando
 * el valor del array sea igual al valor del texto que enviaste como parametro.
 */
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  return array.findIndex((value) => value == text);
}

console.log(findArrayIndex(mainCharacters, "Chewbacca"));
console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
