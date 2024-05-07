/**
 * 10 Calcular un promedio (media) es una tarea extremadamente común.
 */
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  const sum = param.reduce((acc, value) => acc + value);
  return sum / param.length;
}

console.log(average(numbers));
