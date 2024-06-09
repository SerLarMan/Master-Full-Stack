async function getPokemon() {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151 + 1)}`
  );

  return await res.json();
}

getPokemon().then((pokemon) => {
  const img = document.querySelector(".random-image");
  img.src = pokemon.sprites.front_default;
  img.width = "200";
  img.height = "200";
});
