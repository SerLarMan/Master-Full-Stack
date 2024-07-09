export function setUpKey(letter) {
  const div = document.createElement("div");

  const span = document.createElement("span");
  span.textContent = letter.toUpperCase();
  span.addEventListener("click", clickKey);

  div.append(span);
  return div;
}

function clickKey(e) {
  const trList = document.querySelectorAll("tr");

  trList.forEach((tr) => {
    for (let i = 0; i < tr.children.length; i++) {
      console.log(tr.children[i].textContent);
    }
  });
}
