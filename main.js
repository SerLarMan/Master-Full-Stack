import { setUpHeader } from "./src/components/Header/header";
import { setUpNav } from "./src/components/Nav/nav";
import { setUpMain } from "./src/components/Main/main";
import { setUpFooter } from "./src/components/Footer/footer";

import "./src/styles/global.scss";

const app = document.querySelector("#app");

const header = document.createElement("header");
const nav = document.createElement("nav");
const main = document.createElement("main");
const footer = document.createElement("footer");

app.append(setUpNav(nav));
app.append(setUpHeader(header));
app.append(setUpMain(main));
app.append(setUpFooter(footer));

const words = ["Front-End", "Back-End"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const textElement = document.querySelector(".animatedText");
const cursorElement = document.querySelector(".cursor");
const typingSpeed = 200;
const deletingSpeed = 100;
const delayBetweenWords = 1500;

function type() {
  const currentWord = words[currentWordIndex];
  const displayedText = currentWord.substring(0, currentCharIndex);

  textElement.textContent = displayedText;

  cursorElement.classList.remove("blink");

  if (!isDeleting && currentCharIndex < currentWord.length) {
    currentCharIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && currentCharIndex > 0) {
    currentCharIndex--;
    setTimeout(type, deletingSpeed);
  } else if (!isDeleting && currentCharIndex === currentWord.length) {
    isDeleting = true;
    cursorElement.classList.add("blink");
    setTimeout(type, delayBetweenWords);
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    cursorElement.classList.add("blink");
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, typingSpeed);
});

const linkList = document.querySelector(".linkList");

window.addEventListener("resize", () => {
  if (window.matchMedia(`(min-width: 768px)`).matches) {
    linkList.classList.remove("show");
  }
});