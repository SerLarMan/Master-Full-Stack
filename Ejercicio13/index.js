/**
 * 13 Crea una función que reciba por parámetro un array y el valor
 * que desea comprobar que existe dentro de dicho array - comprueba
 * si existe el elemento, en caso que existan nos devuelve un true y
 * la posición de dicho elemento y por la contra un false.
 */
const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(array, param) {
  let element = array.find((value) => value == param);

  if (element) {
    let pos = array.findIndex((value) => value == param);
    return {
      encontrado: true,
      posicion: pos,
    };
  } else {
    return {
      encontrado: false,
    };
  }
}

console.log(finderName(nameFinder, "Peggy"));
