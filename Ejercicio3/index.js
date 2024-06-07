/**
 * 3.1 Dado el siguiente array, crea una copia usando spread operators.
 */
const pointsList = [32, 54, 21, 64, 75, 43];

const copyArray = [...pointsList];

console.log(copyArray);

/**
 * 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
 */
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copyObj = { ...toy };

console.log(copyObj);

/**
 * 3.3 Dado el array del 3.1 y el siguiente array, crea un nuevo array juntandolos usando
 * spread operatos.
 */
const pointsLis2 = [54, 87, 99, 65, 32];

const joinArray = [...pointsList, ...pointsLis2];

console.log(joinArray);

/**
 * 3.4 Dado el objeto del 3.2 y el siguiente objeto. Crea un nuevo objeto fusionando los dos
 * con spread operators.
 */
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const joinObj = { ...toy, ...toyUpdate };

console.log(joinObj);

/**
 * 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
 * pero sin editar el array inicial. De nuevo, usando spread operatos.
 */
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

let copyColors = [colors[0], ...colors.slice(2)];

console.log(colors);
console.log(copyColors);
