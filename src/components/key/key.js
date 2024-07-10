import { randomWord } from "../wordle/wordle";

import "./key.scss";

export function setUpKey(letter) {
  const div = document.createElement("div");
  div.clickable = true;
  div.addEventListener("click", clickKey);
  div.classList.add("key");

  const span = document.createElement("span");
  span.textContent = letter.toUpperCase();

  div.append(span);
  return div;
}

function clickKey(e) {
  const key = e.currentTarget.children[0];

  const tdList = document.querySelectorAll("td");
  const tdEmpty = Array.from(tdList).find((td) => td.textContent == " ");
  if (tdEmpty) {
    tdEmpty.textContent = key.textContent;
    checkRowComplete(tdEmpty.parentElement, key);
  }

  console.log(randomWord);
}

function checkRowComplete(tr, key) {
  if (Array.from(tr.cells).every((td) => td.textContent != " ")) {
    checkCorrectLetters(tr, key);
  }
}

function checkCorrectLetters(tr, key) {
  const chars = [...randomWord];

  console.log(chars);

  Array.from(tr.cells).forEach((td) => {
    if (td.textContent == chars[td.cellIndex]) {
      td.classList.add("correct");
      //key.classList.add("correct");
    } else if (chars.includes(td.textContent)) {
      td.classList.add("badposition");
      //key.classList.add("badposition");
    } else {
      td.classList.add("wrong");
      //key.classList.add("wrong");
    }
    td.style.color = "white";
    td.style.border = "0";
    //key.style.color = "white";
  });

  if (Array.from(tr.cells).every((td) => td.classList.contains("correct"))) {
    winGame();
  } else if (
    tr.order == 5 &&
    Array.from(tr.cells).some((td) => !td.classList.contains("correct"))
  ) {
    endGame();
  }
}

function winGame() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => (key.clickable = false));
  console.log("you won");
}

function endGame() {
  console.log("you lose");
}
