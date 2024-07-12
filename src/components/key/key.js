import { randomWord } from "../wordle/wordle";
import { words } from "../../data/words";

import "./key.scss";

let currentRow = 0; // Variable para mantener la fila actual

// Función para configurar una tecla
export function setUpKey(letter, icon) {
  const div = document.createElement("div");
  div.classList.add("key");
  div.addEventListener("mouseup", handleKeyClick);

  const span = document.createElement("span");
  if (letter) {
    span.textContent = letter.toUpperCase();
    span.delete = false;
  } else {
    span.className = icon;
    span.delete = true;
    div.style.width = "4em";
  }

  div.append(span);
  return div;
}

// Función para manejar el clic en una tecla
function handleKeyClick(e) {
  const key = e.currentTarget.children[0];

  const tdList = document
    .querySelectorAll("tr")
    [currentRow].querySelectorAll("td");
  if (!key.delete) {
    handleLetterKey(key, tdList);
  } else {
    handleDeleteKey(tdList);
  }

  console.log(randomWord);
}

// Manejar una tecla de letra
function handleLetterKey(key, tdList) {
  const tdEmpty = Array.from(tdList).find(
    (td) => td.children[0].textContent === " "
  );
  if (tdEmpty) {
    tdEmpty.children[0].textContent = key.textContent;
    tdEmpty.classList.add("pop-in"); // Añadir clase de animación

    // Eliminar la clase de animación después de que termine para que se pueda reutilizar
    setTimeout(() => {
      tdEmpty.classList.remove("pop-in");
    }, 300);

    checkRowComplete(tdEmpty.parentElement);
  }
}

// Manejar la tecla de eliminar
function handleDeleteKey(tdList) {
  const filledCells = Array.from(tdList).filter(
    (td) => td.children[0].textContent !== " "
  );

  if (filledCells.length > 0) {
    const lastFilled = filledCells[filledCells.length - 1];
    lastFilled.children[0].textContent = " ";
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    key.addEventListener("mouseup", handleKeyClick);
  });
}

// Modificar la función checkRowComplete para animar las celdas si la palabra no existe
function checkRowComplete(tr) {
  if (Array.from(tr.cells).every((td) => td.children[0].textContent !== " ")) {
    if (wordExists(tr)) {
      // Añadir animación a cada td con un retraso
      Array.from(tr.cells).forEach((td, index) => {
        setTimeout(() => {
          td.classList.add("scale-y");

          // Aplicar los colores después de la animación
          td.addEventListener(
            "animationend",
            function () {
              td.classList.remove("scale-y");
              checkCorrectLetters(td, index);
            },
            { once: true }
          );
        }, index * 100); // Retraso de 100ms entre cada td
      });
      currentRow++; // Mover a la siguiente fila solo si la palabra es válida
    } else {
      // Animación de sacudida si la palabra no existe
      Array.from(tr.cells).forEach((td, index) => {
        setTimeout(() => {
          td.classList.add("shake");

          // Remover la clase después de la animación
          setTimeout(() => {
            td.classList.remove("shake");
          }, 600); // Duración de la animación en milisegundos
        }, index * 100); // Retraso de 100ms entre cada td
      });

      disableAllKeysExceptDelete();
      console.log("La palabra no existe");
    }
  }
}

// Verificar si una palabra existe en la lista
function wordExists(tr) {
  const actualWord = Array.from(tr.cells)
    .map((td) => td.children[0].textContent.toLowerCase())
    .join("");
  return words.includes(actualWord);
}

// Modificar checkCorrectLetters para permitir el índice
function checkCorrectLetters(td, index) {
  const chars = [...randomWord];
  const keys = document.querySelectorAll(".key");

  const keyChar = td.children[0].textContent;
  const keyElement = Array.from(keys).find(
    (key) => key.children[0].textContent === keyChar
  );

  if (keyChar === chars[index]) {
    setCorrect(td, keyElement);
  } else if (chars.includes(keyChar)) {
    setBadPosition(td, keyElement);
  } else {
    setWrong(td, keyElement);
  }

  const tr = td.parentElement;
  if (isRowCorrect(tr)) {
    winGame();
  } else if (tr.rowIndex === 5) {
    endGame();
  }
}

// Marcar una celda y tecla como correcta
function setCorrect(td, key) {
  td.classList.add("correct");
  td.style.color = "white";
  key.classList.add("correct");
  key.classList.remove("badposition", "wrong");
  key.style.color = "white";
}

// Marcar una celda y tecla como en posición incorrecta
function setBadPosition(td, key) {
  td.classList.add("badposition");
  td.style.color = "white";
  key.classList.add("badposition");
  key.style.color = "white";
}

// Marcar una celda y tecla como incorrecta
function setWrong(td, key) {
  td.classList.add("wrong");
  td.style.color = "white";
  key.classList.add("wrong");
  key.style.color = "white";
}

// Verificar si todas las celdas de una fila son correctas
function isRowCorrect(tr) {
  return Array.from(tr.cells).every((td) => td.classList.contains("correct"));
}

// Deshabilitar todas las teclas excepto la de borrar
function disableAllKeysExceptDelete() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    if (!key.children[0].delete) {
      key.removeEventListener("mouseup", handleKeyClick);
    }
  });
}

// Deshabilitar todas las teclas
function disableAllKeys() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => key.removeEventListener("mouseup", handleKeyClick));
}

// Función para manejar la victoria
function winGame() {
  disableAllKeys();
  console.log("You won");
}

// Función para manejar el fin del juego
function endGame() {
  disableAllKeys();
  console.log("You lose");
}
