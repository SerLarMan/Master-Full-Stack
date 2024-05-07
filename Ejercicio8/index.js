/**
 * 8 Buscar la palabra más larga. Completa la función que tomando
 * un array de strings como argumento devuelva el más largo,
 * en caso de que dos strings tenga la misma longitud deberá
 * devolver el primero.
 */
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  return param.reduce((a, b) => (a.length >= b.length ? a : b));
}

console.log(findLongestWord(avengers));
