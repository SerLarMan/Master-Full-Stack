/**
 * 14 Crea una función que nos devuelva el número de veces
 * que se repite cada una de las palabras que lo conforma.
 */
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(param) {
  let aux = [];
  param.forEach((value) => {
    let count = param.filter((element) => element === value).length;

    aux.push({
      word: value,
      times: count
    });
  });

  return [...new Map(aux.map(v => [v.word, v])).values()];
}

console.log(repeatCounter(counterWords));
