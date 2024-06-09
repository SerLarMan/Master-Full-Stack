async function getCharacters() {
  const res = await fetch("https://thronesapi.com/api/v2/Characters");

  return await res.json();
}

getCharacters().then((characters) => {
  const select = document.querySelector("#character-list");

  characters.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.fullName;
    option.textContent = element.fullName;

    select.append(option);
  });

  select.addEventListener("change", () => {
    const img = document.querySelector(".character-image");
    img.src = characters.find(
      (character) => character.fullName == select.value
    ).imageUrl;
  });
});
