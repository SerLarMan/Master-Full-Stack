/**
 * Usando la función anterior beneficiate de poder conocer el indice del array
 * para crear una función llamada removeItem que pasandole un array y un texto
 * como parametros (los mismos parametros que en el anterior ejercicio) llame a
 * la función anteriormente creada findArrayIndex y obten el indice para
 * posteriormente usar la función de javascript .splice() para eliminar el
 * elemento del array.
 * Finalmente retorna el array.
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

function removeItem(array, text) {
  let position = findArrayIndex(array, text);

  array.splice(position, 1);

  return array;
}

removeItem(mainCharacters, "Leia");
removeItem(mainCharacters, "Obi-Wan");
removeItem(mainCharacters, "Rey");
console.log(mainCharacters);
