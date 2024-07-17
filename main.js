import { setUpHeader } from "./src/components/Header/header";
import { setUpMain } from "./src/components/Main/main";
import { setUpFooter } from "./src/components/Footer/footer";

import "./src/styles/global.scss";

const app = document.querySelector("#app");

const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

app.append(setUpHeader(header));
app.append(setUpMain(main));
app.append(setUpFooter(footer));

const words = ["Frontend", "Backend"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const textElement = document.querySelector('.animatedText');
const cursorElement = document.querySelector('.cursor');
const typingSpeed = 300;
const deletingSpeed = 200;
const delayBetweenWords = 2000;

function type() {
    const currentWord = words[currentWordIndex];
    const displayedText = currentWord.substring(0, currentCharIndex);

    textElement.textContent = displayedText;

    cursorElement.classList.remove('blink');

    if (!isDeleting && currentCharIndex < currentWord.length) {
        currentCharIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && currentCharIndex > 0) {
        currentCharIndex--;
        setTimeout(type, deletingSpeed);
    } else if (!isDeleting && currentCharIndex === currentWord.length) {
        isDeleting = true;
        cursorElement.classList.add('blink');
        setTimeout(type, delayBetweenWords);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        cursorElement.classList.add('blink');
        setTimeout(type, typingSpeed);
    }
}

/* document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, typingSpeed);
}); */
