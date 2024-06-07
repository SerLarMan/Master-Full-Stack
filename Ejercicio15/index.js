/**
 * Crea una función llamada swap que reciba un array y dos parametros que sean
 * indices del array. La función deberá intercambiar la posición de los valores de
 * los indices que hayamos enviado como parametro. Retorna el array resultante.
 */
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

fantasticFour.spl;

function swap(array, index1, index2) {
  let aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
  return array;
}

//console.log(swap(fantasticFour, 0, 1));
//console.log(swap(fantasticFour, 2, 3));
console.log(swap(fantasticFour, 0, 2));
