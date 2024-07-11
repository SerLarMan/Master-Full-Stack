import { randomWord } from "../wordle/wordle";
import { words } from "../../data/words";

import "./key.scss";

export function setUpKey(letter, icon) {
  const div = document.createElement("div");
  div.classList.add("key");

  const span = document.createElement("span");
  if (letter) {
    span.textContent = letter.toUpperCase();
    span.delete = false;
  } else {
    span.className = icon;
    span.delete = true;
    div.style.width = "4em";
  }
  span.clickable = true;
  span.addEventListener("mouseup", clickKey);

  div.append(span);
  return div;
}

function clickKey(e) {
  console.log(e)
  if (e.currentTarget.clickable) {
    const key = e.currentTarget;

    const tdList = document.querySelectorAll("td");
    if (!key.delete) {
      const tdEmpty = Array.from(tdList).find(
        (td) => td.children[0].textContent == " "
      );
      if (tdEmpty) {
        tdEmpty.children[0].textContent = key.textContent;
        checkRowComplete(tdEmpty.parentElement);
      }
    } else {
      const tdEmptyPos = Array.from(tdList).findIndex(
        (td) => td.children[0].textContent == " "
      );

      const minor = Array.from(tdList)[tdEmptyPos - 1];

      if (minor) {
        minor.children[0].textContent = " ";
      }
    }
  }

  console.log(randomWord);
}

function checkRowComplete(tr) {
  if (Array.from(tr.cells).every((td) => td.children[0].textContent != " ")) {
    if (checkWordExists(tr)) {
      checkCorrectLetters(tr);
    } else {
      const keys = document.querySelectorAll(".key");
      keys.forEach((key) => {
        if (!key.children[0].textContent) {
          key.children[0].clickable = false;
        }
      });
      console.log("la palabra no existe");
    }
  }
}

function checkWordExists(tr) {
  let actualWord = "";
  Array.from(tr.cells).forEach((td) => {
    actualWord += td.children[0].textContent.toLowerCase();
  });

  return words.find((word) => word == actualWord);
}

function checkCorrectLetters(tr) {
  const chars = [...randomWord];
  const keys = document.querySelectorAll(".key");
  let key;

  console.log(chars);

  Array.from(tr.cells).forEach((td) => {
    if (td.children[0].textContent == chars[td.cellIndex]) {
      td.classList.add("correct");
      key = Array.from(keys).find(
        (key) => key.children[0].textContent == td.children[0].textContent
      );
      key.classList.remove("badposition");
      key.classList.add("correct");
      key.style.color = "white";
    } else if (chars.includes(td.children[0].textContent)) {
      td.classList.add("badposition");
      key = Array.from(keys).find(
        (key) => key.children[0].textContent == td.children[0].textContent
      );
      key.classList.add("badposition");
      key.style.color = "white";
    } else {
      td.classList.add("wrong");
      key = Array.from(keys).find(
        (key) => key.children[0].textContent == td.children[0].textContent
      );
      key.classList.add("wrong");
      key.style.color = "white";
    }
    td.style.color = "white";
    td.style.border = "0";
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
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => (key.clickable = false));
  console.log("you lose");
}
