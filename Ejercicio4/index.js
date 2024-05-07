/**
 * 4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
 */
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

/**
 * 4.2 Cambia el primer elemento de avengers a "IRONMAN"
 */
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1[0] = "IRONMAN";

/**
 * 4.3 console numero de elementos en el array usando la propiedad correcta de Array.
 */
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(`Total de vengadores ${avengers2.length}`);

/**
 * 4.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
 */
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty");
rickAndMortyCharacters.push("Summer");
console.log(
  `Último personaje ${
    rickAndMortyCharacters[rickAndMortyCharacters.length - 1]
  }`
);

/**
 * 4.5 Elimina el último elemento del array y muestra el primero y el último por consola.
 */
const rickAndMortyCharacters1 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters1.pop();
console.log(`Primero ${rickAndMortyCharacters1[0]}`);
console.log(
  `Último ${rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]}`
);

/**
 * 4.6 Elimina el segundo elemento del array y muestra el array por consola.
 */
const rickAndMortyCharacters2 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters2.splice(1, 1);
console.log(rickAndMortyCharacters2);
